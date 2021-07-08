import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';
import Games from '../pages/Games';
import { IState } from '../store';

const Routes: React.FC = () => {
  const isLogged = useSelector<IState>(state => state.auth.loggedIn);

  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/password" exact component={ForgotPassword} />
      {isLogged && (
        <>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/games" exact component={Games} />
        </>
      )}
    </Switch>
  );
};

export default Routes;
