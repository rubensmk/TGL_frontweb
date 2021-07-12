import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import api from '../../services/api';
import * as S from './styles';

interface ParamsToken {
  token: string;
}
const ResetPassword: React.FC = () => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmation, setEnteredConfirmation] = useState('');
  const { addToast } = useToasts();
  const history = useHistory();
  const params = useParams<ParamsToken>();

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  };

  const handleConfirmation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredConfirmation(event.target.value);
  };

  const handleChangePassword = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.put('passwords', {
        token: params.token,
        password: enteredPassword,
        password_confirmation: enteredConfirmation,
      });
      addToast('Alterações realizadas com sucesso.', {
        appearance: 'success',
        autoDismiss: true,
      });
      history.push('/');
    } catch (error) {
      addToast('Erro, tente novamente!', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  return (
    <S.Container>
      <S.Header>
        <h1>TGL</h1>
      </S.Header>
      <S.Content>
        <h2> Reset Password</h2>
        <form onSubmit={handleChangePassword}>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          <input
            type="password"
            placeholder="Password Confirmation"
            onChange={handleConfirmation}
          />
          <button type="submit">Change Password</button>
        </form>
      </S.Content>
    </S.Container>
  );
};

export default ResetPassword;
