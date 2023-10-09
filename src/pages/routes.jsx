import { InfoPages } from 'common/components';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTE_URL } from 'common';
import SampleFile from './common/components/SampleFile';

const App = lazy(() => import('../App'));

export const routes = [
  {
    path: ROUTE_URL.ROOT,
    element: <Navigate to={ROUTE_URL.ROOT_BASE_MODULE} replace />,
    errorElement: <InfoPages.ErrorBoundary />
  },
  {
    path: ROUTE_URL.ROOT_BASE_MODULE,
    element: <App />, // TODO: replace with CivilRegistration Home / dashboard
    errorElement: <InfoPages.ErrorBoundary />,
    children: [
      {
        path: 'sample',
        element: <SampleFile />,
        errorElement: <InfoPages.ErrorBoundary />
      }]
  },
  {
    path: '*',
    element: <InfoPages.NotFound />
  }
];
