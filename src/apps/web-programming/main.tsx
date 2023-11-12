import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* "Mount" this app under the /web-programming URL pathname. All routes and links
        are relative to this name. */}
    <BrowserRouter basename="web-programming">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
