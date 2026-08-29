import type { ComponentType } from 'react';
import { AboutPage } from './pages/about';
import { Blog11PlusPracticePapers } from './pages/blog-11-plus-practice-papers';
import { Blog11PlusVerbalReasoning } from './pages/blog-11-plus-verbal-reasoning';
import { BlogArticleGrammarSchool } from './pages/blog-article-grammar-school';
import { BlogBestGrammarSchools } from './pages/blog-best-grammar-schools';
import { BlogGrammarSchoolAdmissions } from './pages/blog-grammar-school-admissions';
import { BlogGrammarSchoolFees } from './pages/blog-grammar-school-fees';
import { BlogGrammarVsComprehensive } from './pages/blog-grammar-vs-comprehensive';
import { BlogHowToPrepare11Plus } from './pages/blog-how-to-prepare-11-plus';
import { BlogIndex } from './pages/blog-index';
import { BlogTutoringCost } from './pages/blog-tutoring-cost';
import { BlogWhatIs11Plus } from './pages/blog-what-is-11-plus';
import { FindATutor } from './pages/find-a-tutor';
import { Home } from './pages/home';
import { HowItWorksPage } from './pages/how-it-works';
import { LocationKent } from './pages/location-kent';
import { LocationLondon } from './pages/location-london';
import { LocationManchester } from './pages/location-manchester';
import { LocationOnline } from './pages/location-online';
import { PrivacyPage, TermsPage } from './pages/legal';
import { ParentsPage } from './pages/parents';
import { ParentTools } from './pages/parent-tools';
import { Subject11Plus } from './pages/subject-11-plus';
import { SubjectEnglish } from './pages/subject-english';
import { SubjectGcseMaths } from './pages/subject-gcse-maths';
import { SubjectMaths } from './pages/subject-maths';
import { SubjectScience } from './pages/subject-science';
import { SITE_URL } from './site-config';

export { SITE_URL };

export interface PublicRoute {
  path: string;
  component: ComponentType;
  sitemap: boolean;
}

const route = (path: string, component: ComponentType): PublicRoute => ({
  path,
  component,
  sitemap: true,
});

/** The only source of truth for public routing, prerendering, and the sitemap. */
export const publicRoutes: readonly PublicRoute[] = [
  route('/', Home),
  route('/subjects/11-plus', Subject11Plus),
  route('/subjects/maths', SubjectMaths),
  route('/subjects/gcse-maths', SubjectGcseMaths),
  route('/subjects/english', SubjectEnglish),
  route('/subjects/science', SubjectScience),
  route('/location/london', LocationLondon),
  route('/location/online', LocationOnline),
  route('/location/kent', LocationKent),
  route('/location/manchester', LocationManchester),
  route('/how-it-works', HowItWorksPage),
  route('/about', AboutPage),
  route('/blog', BlogIndex),
  route('/blog/what-is-a-grammar-school', BlogArticleGrammarSchool),
  route('/blog/what-is-the-11-plus', BlogWhatIs11Plus),
  route('/blog/11-plus-verbal-reasoning', Blog11PlusVerbalReasoning),
  route('/blog/11-plus-practice-papers', Blog11PlusPracticePapers),
  route('/blog/how-to-prepare-for-11-plus', BlogHowToPrepare11Plus),
  route('/blog/grammar-school-admissions', BlogGrammarSchoolAdmissions),
  route('/blog/grammar-school-fees', BlogGrammarSchoolFees),
  route('/blog/how-much-does-tutoring-cost', BlogTutoringCost),
  route('/blog/best-grammar-schools-uk', BlogBestGrammarSchools),
  route('/blog/grammar-school-vs-comprehensive', BlogGrammarVsComprehensive),
  route('/parents', ParentsPage),
  route('/find-a-tutor', FindATutor),
  route('/parents/tools', ParentTools),
  route('/legal/privacy', PrivacyPage),
  route('/legal/terms', TermsPage),
];

/** Legacy discovery URL: rendered for users, canonicalized and noindexed. */
export const nonIndexableAliases: readonly PublicRoute[] = [{
  path: '/finder-a-tutor',
  component: FindATutor,
  sitemap: false,
}];

export const appRoutes = [...publicRoutes, ...nonIndexableAliases] as const;