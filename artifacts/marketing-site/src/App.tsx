import { type ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

import { Home } from './pages/home';
import { Subject11Plus } from './pages/subject-11-plus';
import { SubjectMaths } from './pages/subject-maths';
import { LocationLondon } from './pages/location-london';
import { LocationOnline } from './pages/location-online';
import { LocationKent } from './pages/location-kent';
import { HowItWorksPage } from './pages/how-it-works';
import { AboutPage } from './pages/about';
import { BlogIndex } from './pages/blog-index';
import { BlogArticleGrammarSchool } from './pages/blog-article-grammar-school';
import { BlogWhatIs11Plus } from './pages/blog-what-is-11-plus';
import { Blog11PlusVerbalReasoning } from './pages/blog-11-plus-verbal-reasoning';
import { Blog11PlusPracticePapers } from './pages/blog-11-plus-practice-papers';
import { BlogHowToPrepare11Plus } from './pages/blog-how-to-prepare-11-plus';
import { BlogGrammarSchoolAdmissions } from './pages/blog-grammar-school-admissions';
import { BlogGrammarSchoolFees } from './pages/blog-grammar-school-fees';
import { BlogTutoringCost } from './pages/blog-tutoring-cost';
import { BlogBestGrammarSchools } from './pages/blog-best-grammar-schools';
import { BlogGrammarVsComprehensive } from './pages/blog-grammar-vs-comprehensive';
import { ParentsPage } from './pages/parents';
import { FindATutor } from './pages/find-a-tutor';
import { ParentTools } from './pages/parent-tools';

const queryClient = new QueryClient();

function Router() {
  return (
    <RoutedErrorBoundary>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/subjects/11-plus" component={Subject11Plus} />
        <Route path="/subjects/maths" component={SubjectMaths} />
        <Route path="/location/london" component={LocationLondon} />
        <Route path="/location/online" component={LocationOnline} />
        <Route path="/location/kent" component={LocationKent} />
        <Route path="/how-it-works" component={HowItWorksPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/what-is-a-grammar-school" component={BlogArticleGrammarSchool} />
        <Route path="/blog/what-is-the-11-plus" component={BlogWhatIs11Plus} />
        <Route path="/blog/11-plus-verbal-reasoning" component={Blog11PlusVerbalReasoning} />
        <Route path="/blog/11-plus-practice-papers" component={Blog11PlusPracticePapers} />
        <Route path="/blog/how-to-prepare-for-11-plus" component={BlogHowToPrepare11Plus} />
        <Route path="/blog/grammar-school-admissions" component={BlogGrammarSchoolAdmissions} />
        <Route path="/blog/grammar-school-fees" component={BlogGrammarSchoolFees} />
        <Route path="/blog/how-much-does-tutoring-cost" component={BlogTutoringCost} />
        <Route path="/blog/best-grammar-schools-uk" component={BlogBestGrammarSchools} />
        <Route path="/blog/grammar-school-vs-comprehensive" component={BlogGrammarVsComprehensive} />
        <Route path="/parents" component={ParentsPage} />
        <Route path="/find-a-tutor" component={FindATutor} />
        <Route path="/finder-a-tutor" component={FindATutor} />
        <Route path="/parents/tools" component={ParentTools} />

        {/* Placeholders for pages not yet built */}
        <Route path="/subjects/gcse-maths" component={Home} />
        <Route path="/subjects/english" component={Home} />
        <Route path="/subjects/science" component={Home} />
        <Route path="/location/manchester" component={Home} />
        <Route path="/legal/privacy" component={Home} />
        <Route path="/legal/terms" component={Home} />

        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location]);

  return null;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
