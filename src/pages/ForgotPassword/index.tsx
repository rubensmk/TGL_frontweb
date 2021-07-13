/* eslint-disable array-callback-return */
import React, { useCallback, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import * as Yup from 'yup';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import * as S from './styles';

const ForgotPassword: React.FC = () => {
  const [forgotPassword, setForgotPassword] = useState('');
  const { addToast } = useToasts();
  const history = useHistory();
  const [error, setError] = useState({ email: '' });

  const handleResetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForgotPassword(event.target.value);
  };
  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      const data = {
        email: forgotPassword,
      };
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });
        await schema.validate(data, { abortEarly: false });
        await api.post('passwords', {
          email: forgotPassword,
          redirect_url: 'http://localhost:3000/resetpassword',
        });

        addToast(
          'E-mail válido, foi enviado para o seu email o link de reset da senha!',
          {
            appearance: 'success',
            autoDismiss: true,
          },
        );
        history.push('/');
      } catch (err) {
        const errors = getValidationErrors(err);
        setError({ email: errors.email });
        addToast('E-mail inválido, tente novamente!', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    },
    [addToast, forgotPassword, history],
  );

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
          <S.ErrorMessage>{error.email}</S.ErrorMessage>
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
