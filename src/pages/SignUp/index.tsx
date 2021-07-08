import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';
import * as S from './styles';
import api from '../../services/api';

const SignUp: React.FC = () => {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const history = useHistory();
  const { addToast } = useToasts();

  const handleRegisterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterName(event.target.value);
  };
  const handleRegisterEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterEmail(event.target.value);
  };
  const handleRegisterPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRegisterPassword(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await api.post('users', {
        username: registerName,
        email: registerEmail,
        password: registerPassword,
        password_confirmation: registerPassword,
      });

      addToast('Cadastro realizado com sucesso!', {
        appearance: 'success',
        autoDismiss: true,
      });

      history.push('/');
    } catch (error) {
      addToast('Erro no cadastro, tente novamente.', {
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
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={handleRegisterName}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={handleRegisterEmail}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={handleRegisterPassword}
          />
          <button className="register button" type="submit">
            Register
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

export default SignUp;
