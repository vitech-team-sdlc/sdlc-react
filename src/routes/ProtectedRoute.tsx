import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';

import HeaderComponent from '../components/HeaderComponent';

export function ProtectedRoute({ component: Component, ...restOfProps }: any): JSX.Element {
  const isAuthenticated = localStorage.getItem('TOKEN');

  return (
    <>
      {isAuthenticated && <HeaderComponent />}
      <Route
        {...restOfProps}
        render={(props: RouteComponentProps) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    </>
  );
}
