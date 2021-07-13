import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';
import * as Yup from 'yup';
import * as S from './styles';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const history = useHistory();
  const { addToast } = useToasts();
  const [error, setError] = useState({ username: '', email: '', password: '' });

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

    const data = {
      username: registerName,
      email: registerEmail,
      password: registerPassword,
      password_confirmation: registerPassword,
    };

    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('Nome do usuário é obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('Senha obrigatória')
          .min(6, 'No mínimo 6 caractéres'),
      });
      await schema.validate(data, { abortEarly: false });

      await api.post('users', data);

      addToast('Cadastro realizado com sucesso!', {
        appearance: 'success',
        autoDismiss: true,
      });

      history.push('/');
    } catch (err) {
      const errors = getValidationErrors(err);
      setError({
        username: errors.username,
        email: errors.email,
        password: errors.password,
      });
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
          <input type="text" placeholder="Name" onChange={handleRegisterName} />
          <S.ErrorMessage>{error.username}</S.ErrorMessage>
          <input
            type="email"
            placeholder="Email"
            onChange={handleRegisterEmail}
          />
          <S.ErrorMessage>{error.email}</S.ErrorMessage>
          <input
            type="password"
            placeholder="Password"
            onChange={handleRegisterPassword}
          />
          <S.ErrorMessage>{error.password}</S.ErrorMessage>
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
