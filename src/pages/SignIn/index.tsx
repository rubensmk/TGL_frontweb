/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import * as S from './styles';
import { IUser } from '../../store/modules/auth/types';
import { IState } from '../../store';
import { logIn } from '../../store/modules/auth/actions';

const SignIn: React.FC = () => {
  const allUsers = useSelector<IState, IUser[]>(state => state.auth.users);
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const history = useHistory();
  const { addToast } = useToasts();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  };
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    const logInUser = {
      email: enteredEmail,
      password: enteredPassword,
    };
    allUsers.map(user => {
      if (
        logInUser.email === user.email &&
        logInUser.password === user.password
      ) {
        addToast('Sessão iniciada com sucesso, Seja Bem-Vindo!', {
          appearance: 'success',
          autoDismiss: true,
        });
        dispatch(logIn(true));
        history.push('/dashboard');
      } else {
        addToast('E-mail ou senha incorreta!', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    });
  };

  return (
    <S.Container>
      <S.Title>
        <h2>
          The
          <br />
          Greatest
          <br />
          App
        </h2>
        <button type="button">for</button>
        <h1>LOTTERY</h1>
      </S.Title>
      <S.Auth>
        <h2>Authentication</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={handlePassword}
          />
          <Link className="forgot button" to="/password">
            I forget my password
          </Link>
          <button type="submit" className="login button">
            Log In
            <FiArrowRight />
          </button>
        </form>
        <Link to="/register" className="signup button">
          Sign Up
          <FiArrowRight />
        </Link>
      </S.Auth>
    </S.Container>
  );
};

export default SignIn;
