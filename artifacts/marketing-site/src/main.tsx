import { createRoot, hydrateRoot, type ErrorInfo } from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';

import './index.css';

const root = document.getElementById('root')!;
const app = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
const options = {
  // Keeps caught errors off reportError(), which would raise the dev overlay.
  onCaughtError: (error: unknown, errorInfo: ErrorInfo) => {
    console.error(error, errorInfo.componentStack);
  },
};

if (root.dataset.ssr === 'true') {
  hydrateRoot(root, app, options);
} else {
  createRoot(root, options).render(app);
}
