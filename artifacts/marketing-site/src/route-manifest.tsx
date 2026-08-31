import { createElement, lazy, type ComponentType } from 'react';
import {
  IS_INDEXABLE_BUILD,
  SITEMAP_URL,
  SITE_URL,
} from './site-config';

export { IS_INDEXABLE_BUILD, SITEMAP_URL, SITE_URL };

export type RouteLoader = () => Promise<{ default: ComponentType }>;

export interface PublicRoute {
  path: string;
  component: ComponentType;
  load: RouteLoader;
  sitemap: boolean;
}

interface RoutePage {
  component: ComponentType;
  load: RouteLoader;
}

const page = (loadModule: () => Promise<unknown>, exportName: string): RoutePage => {
  let loadedComponent: ComponentType | undefined;
  let modulePromise: Promise<{ default: ComponentType }> | undefined;

  const load: RouteLoader = () => {
    if (!modulePromise) {
      modulePromise = loadModule().then((module) => {
        const component = (module as Record<string, unknown>)[exportName];
        if (typeof component !== 'function') {
          throw new Error(`Route module did not export ${exportName}`);
        }
        loadedComponent = component as ComponentType;
        return { default: loadedComponent };
      });
    }
    return modulePromise;
  };

  const LazyComponent = lazy(load);
  const component: ComponentType = (props) =>
    loadedComponent ? createElement(loadedComponent, props) : createElement(LazyComponent, props);

  return { component, load };
};

const route = (path: string, page: RoutePage): PublicRoute => ({
  path,
  component: page.component,
  load: page.load,
  sitemap: true,
});

/** The only source of truth for public routing, prerendering, and the sitemap. */
export const publicRoutes: readonly PublicRoute[] = [
  route('/', page(() => import('./pages/home'), 'Home')),
  route('/subjects/11-plus', page(() => import('./pages/subject-11-plus'), 'Subject11Plus')),
  route('/subjects/maths', page(() => import('./pages/subject-maths'), 'SubjectMaths')),
  route('/subjects/gcse-maths', page(() => import('./pages/subject-gcse-maths'), 'SubjectGcseMaths')),
  route('/subjects/english', page(() => import('./pages/subject-english'), 'SubjectEnglish')),
  route('/subjects/science', page(() => import('./pages/subject-science'), 'SubjectScience')),
  route('/location/london', page(() => import('./pages/location-london'), 'LocationLondon')),
  route('/location/online', page(() => import('./pages/location-online'), 'LocationOnline')),
  route('/location/kent', page(() => import('./pages/location-kent'), 'LocationKent')),
  route('/location/manchester', page(() => import('./pages/location-manchester'), 'LocationManchester')),
  route('/how-it-works', page(() => import('./pages/how-it-works'), 'HowItWorksPage')),
  route('/about', page(() => import('./pages/about'), 'AboutPage')),
  route('/blog', page(() => import('./pages/blog-index'), 'BlogIndex')),
  route('/blog/what-is-a-grammar-school', page(() => import('./pages/blog-article-grammar-school'), 'BlogArticleGrammarSchool')),
  route('/blog/what-is-the-11-plus', page(() => import('./pages/blog-what-is-11-plus'), 'BlogWhatIs11Plus')),
  route('/blog/11-plus-verbal-reasoning', page(() => import('./pages/blog-11-plus-verbal-reasoning'), 'Blog11PlusVerbalReasoning')),
  route('/blog/11-plus-practice-papers', page(() => import('./pages/blog-11-plus-practice-papers'), 'Blog11PlusPracticePapers')),
  route('/blog/how-to-prepare-for-11-plus', page(() => import('./pages/blog-how-to-prepare-11-plus'), 'BlogHowToPrepare11Plus')),
  route('/blog/grammar-school-admissions', page(() => import('./pages/blog-grammar-school-admissions'), 'BlogGrammarSchoolAdmissions')),
  route('/blog/grammar-school-fees', page(() => import('./pages/blog-grammar-school-fees'), 'BlogGrammarSchoolFees')),
  route('/blog/how-much-does-tutoring-cost', page(() => import('./pages/blog-tutoring-cost'), 'BlogTutoringCost')),
  route('/blog/best-grammar-schools-uk', page(() => import('./pages/blog-best-grammar-schools'), 'BlogBestGrammarSchools')),
  route('/blog/grammar-school-vs-comprehensive', page(() => import('./pages/blog-grammar-vs-comprehensive'), 'BlogGrammarVsComprehensive')),
  route('/parents', page(() => import('./pages/parents'), 'ParentsPage')),
  route('/find-a-tutor', page(() => import('./pages/find-a-tutor'), 'FindATutor')),
  route('/parents/tools', page(() => import('./pages/parent-tools'), 'ParentTools')),
  route('/legal/privacy', page(() => import('./pages/legal'), 'PrivacyPage')),
  route('/legal/terms', page(() => import('./pages/legal'), 'TermsPage')),
];

/** Legacy discovery URL: rendered for users, canonicalized and noindexed. */
const findATutorRoute = publicRoutes.find(({ path }) => path === '/find-a-tutor')!;
export const nonIndexableAliases: readonly PublicRoute[] = [{
  path: '/finder-a-tutor',
  component: findATutorRoute.component,
  load: findATutorRoute.load,
  sitemap: false,
}];

export const appRoutes = [...publicRoutes, ...nonIndexableAliases] as const;

/** Resolve the matching page module before server rendering to keep SSR complete. */
export async function preloadRoute(url: string) {
  const pathname = url.split(/[?#]/, 1)[0];
  const route = appRoutes.find(({ path }) => path === pathname);
  if (route) await route.load();
}