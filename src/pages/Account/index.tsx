import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import api from '../../services/api';
import { IState } from '../../store';
import { IUser } from '../../store/modules/auth/types';
import { formatDate } from '../../utils/formatDate';
import * as S from './styles';

const Account: React.FC = () => {
  const user = useSelector<IState, IUser>(state => state.auth.user);
  const [enteredName, setEnteredName] = useState('');
  const { addToast } = useToasts();

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.put(`users/${user.id}`, { username: enteredName });
      addToast('Alterações realizadas com sucesso.', {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (error) {
      addToast('Erro, tente novamente!', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };
  const sendResetPasswordMail = async () => {
    try {
      await api.post('passwords', {
        email: user.email,
        redirect_url: 'http://localhost:3000/resetpassword',
      });
      addToast('E-mail para alterar senha foi enviado para o seu email!', {
        appearance: 'success',
        autoDismiss: true,
      });
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
        <nav>
          <S.GoBackButton to="/dashboard">
            <FiArrowLeft />
            Voltar
          </S.GoBackButton>
        </nav>
      </S.Header>
      <S.Content>
        <S.Profile>
          <h2> My Profile</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder={user.username}
              onChange={handleName}
            />
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              disabled
            />
            <strong>
              Created at: <p>{formatDate(user.created_at)}</p>
            </strong>
            <strong>
              Last Update:<p>{formatDate(user.updated_at)}</p>
            </strong>
            <button type="submit" className="login button">
              Apply Changes
            </button>
          </form>
        </S.Profile>
        <S.PasswordChange>
          <h2>Change Password</h2>
          <button type="button" onClick={sendResetPasswordMail}>
            Send Email to Change Password
          </button>
        </S.PasswordChange>
      </S.Content>
    </S.Container>
  );
};

export default Account;
