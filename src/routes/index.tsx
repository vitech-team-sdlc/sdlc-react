import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

import LoginPage from '../views/auth/LoginPage';
import HomePage from '../views/home/HomePage';

export const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={LoginPage} />
      <ProtectedRoute exact path='/' component={HomePage} />
    </Switch>
  </BrowserRouter>
);
