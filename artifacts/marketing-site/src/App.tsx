import { type ReactNode } from 'react';
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
import { LocationLondon } from './pages/location-london';
import { LocationOnline } from './pages/location-online';
import { HowItWorksPage } from './pages/how-it-works';
import { AboutPage } from './pages/about';
import { BlogIndex } from './pages/blog-index';
import { BlogArticleGrammarSchool } from './pages/blog-article-grammar-school';

const queryClient = new QueryClient();

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/subjects/11-plus" component={Subject11Plus} />
        <Route path="/location/london" component={LocationLondon} />
        <Route path="/location/online" component={LocationOnline} />
        <Route path="/how-it-works" component={HowItWorksPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/what-is-a-grammar-school" component={BlogArticleGrammarSchool} />
        
        {/* Placeholders for links that don't have built pages yet */}
        <Route path="/subjects/gcse-maths" component={Home} />
        <Route path="/subjects/english" component={Home} />
        <Route path="/subjects/science" component={Home} />
        <Route path="/location/manchester" component={Home} />
        <Route path="/blog/how-much-does-tutoring-cost" component={Home} />
        <Route path="/blog/grammar-school-admissions" component={Home} />
        <Route path="/parents" component={Home} />
        <Route path="/legal/privacy" component={Home} />
        <Route path="/legal/terms" component={Home} />
        
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
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
