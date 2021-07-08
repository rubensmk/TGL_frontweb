/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';
import * as S from './styles';
import api from '../../services/api';

const ForgotPassword: React.FC = () => {
  const [forgotPassword, setForgotPassword] = useState('');
  const { addToast } = useToasts();
  const history = useHistory();

  const handleResetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForgotPassword(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await api.post('passwords', {
        email: forgotPassword,
        redirect_url: 'http://localhost:3000/',
      });

      addToast(
        'E-mail válido, foi enviado para o seu email o link de reset da senha!',
        {
          appearance: 'success',
          autoDismiss: true,
        },
      );
      history.push('/');
    } catch (error) {
      addToast('E-mail inválido, tente novamente!', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
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
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={handleResetPassword}
          />
          <button type="submit" className="sendLink button">
            Send Link
            <FiArrowRight />
          </button>
        </form>
        <Link to="/" className="goBack button">
          <FiArrowLeft />
          Back
        </Link>
      </S.Auth>
    </S.Container>
  );
};

export default ForgotPassword;
