/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import * as S from './styles';
import { IState } from '../../store';
import { IUser } from '../../store/modules/auth/types';

const ResetPassword: React.FC = () => {
  const [forgotPassword, setForgotPassword] = useState('');
  const allUsers = useSelector<IState, IUser[]>(state => state.auth.users);
  const { addToast } = useToasts();

  const handleResetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForgotPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    allUsers.map(user => {
      if (forgotPassword === user.email) {
        addToast(
          'E-mail válido, foi enviado para o seu email o link de reset da senha!',
          {
            appearance: 'success',
            autoDismiss: true,
          },
        );
      } else {
        addToast('E-mail inválido, tente novamente!', {
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

export default ResetPassword;
