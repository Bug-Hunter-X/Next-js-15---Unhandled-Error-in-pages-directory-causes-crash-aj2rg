```javascript
// pages/about.js
import ErrorBoundary from '../components/ErrorBoundary';

export default function About() {
  throw new Error('Something went wrong!');
}

About.getLayout = function Layout(page) {
  return (
    <ErrorBoundary>
      {page}
    </ErrorBoundary>
  );
}
```
```javascript
// components/ErrorBoundary.js
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}
```