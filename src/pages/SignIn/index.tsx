/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import * as Yup from 'yup';

import api from '../../services/api';
import { logIn } from '../../store/modules/auth/actions';
import getValidationErrors from '../../utils/getValidationErrors';
import * as S from './styles';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });
  const history = useHistory();
  const { addToast } = useToasts();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  };
  const handleLogin = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      const data = {
        email: enteredEmail,
        password: enteredPassword,
      };

      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, { abortEarly: false });

        const response = await api.post('sessions', data);

        const { token, user } = response.data;

        addToast('Sessão iniciada com sucesso, Seja Bem-Vindo!', {
          appearance: 'success',
          autoDismiss: true,
        });

        dispatch(logIn({ token, user }));
        history.push('/dashboard');
      } catch (err) {
        const errors = getValidationErrors(err);
        setError({ email: errors.email, password: errors.password });
        addToast('Erro ao efetuar login, verifique seu email ou senha.', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    },
    [addToast, history, dispatch, enteredEmail, enteredPassword],
  );

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
          <input type="email" placeholder="Email" onChange={handleEmail} />
          <S.ErrorMessage>{error.email}</S.ErrorMessage>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          <S.ErrorMessage>{error.password}</S.ErrorMessage>
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
