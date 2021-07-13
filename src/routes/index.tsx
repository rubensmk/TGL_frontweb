import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Account from '../pages/Account';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import Games from '../pages/Games';
import ResetPassword from '../pages/ResetPassword';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { IState } from '../store';

const Routes: React.FC = () => {
  const isLogged = useSelector<IState>(state => state.auth.loggedIn);

  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/password" exact component={ForgotPassword} />
      <Route path="/resetpassword/:token" exact component={ResetPassword} />

      {isLogged && (
        <>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/games" exact component={Games} />
          <Route path="/account" exact component={Account} />
        </>
      )}
    </Switch>
  );
};

export default Routes;
