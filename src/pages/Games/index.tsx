import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Games: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <h1>TGL</h1>
        <nav>
          <Link to="/dashboard" className="home">
            Home
          </Link>
          <Link to="/" className="account">
            Account
          </Link>
          <Link to="/" className="logout">
            Logout
          </Link>
        </nav>
      </S.Header>
    </S.Container>
  );
};

export default Games;
