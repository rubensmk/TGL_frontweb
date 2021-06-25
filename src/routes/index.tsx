import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../pages/Dashboard';
import Games from '../pages/Games';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/register" exact component={SignUp} />
    <Route path="/password" exact component={ResetPassword} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/games" exact component={Games} />
  </Switch>
);

export default Routes;
