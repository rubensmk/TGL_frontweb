import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <h1>TGL</h1>
        <nav>
          <Link to="/" className="account">
            Account
          </Link>
          <Link to="/" className="logout">
            Sair
            <FiArrowRight />
          </Link>
        </nav>
      </S.Header>
    </S.Container>
  );
};

export default SignIn;
