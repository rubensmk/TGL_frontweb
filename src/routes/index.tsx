import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';
import Games from '../pages/Games';
import Account from '../pages/Account';
import { IState } from '../store';
import ResetPassword from '../pages/ResetPassword';
import { logIn } from '../store/modules/auth/actions';

const Routes: React.FC = () => {
  const isLogged = useSelector<IState>(state => state.auth.loggedIn);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkLoginIn() {
      const token = localStorage.getItem('@TGL:token');
      const user = localStorage.getItem('@TGL:user');

      if (token && user) {
        dispatch(logIn({ token: JSON.parse(token), user: JSON.parse(user) }));
        history.push('/dashboard');
      }
    }
    checkLoginIn();
  }, [dispatch, history]);

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
