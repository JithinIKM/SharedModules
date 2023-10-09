import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  InfoPages, ThemeProvider, theme, ToastContainer, Navigator, Fonts
} from 'common/components';
import { routes } from 'pages/routes';
import RouteAuthorizer from 'common/components/RouteAuthorizer';
import _ from 'lodash';
import ErrorBoundary from 'common/components/ErrorBoundary';
import { store } from './app/store';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const renderRoutes = (appRoutes, parentPath = '') => appRoutes.map((route, index) => {
  const keyIndex = `${index}-route`;
  const fullPath = parentPath + ((!_.startsWith('/', route.path) && !_.endsWith('/', parentPath)) ? '/' : '') + route.path;
  return (
    <Route
      key={keyIndex}
      path={route.path}
      element={(

        <RouteAuthorizer
          path={fullPath}
          element={(<ErrorBoundary parentPath={parentPath}>{route.element}</ErrorBoundary>)}
          roles={route.roles || []}
        />
)}
      {...(route.errorElement && { errorElement: route.errorElement })}
    >
      {route.children && renderRoutes(route.children, fullPath)}
    </Route>
  );
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<InfoPages.Loading />}>
        <ThemeProvider theme={theme}>
          <Fonts />
          <BrowserRouter>
            <Routes>
              {renderRoutes(routes)}
            </Routes>
            <Navigator />
          </BrowserRouter>
          <ToastContainer />
        </ThemeProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
