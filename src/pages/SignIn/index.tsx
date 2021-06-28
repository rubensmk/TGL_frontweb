import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import * as S from './styles';

const SignIn: React.FC = () => {
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
        <section>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <Link className="forgot button" to="/password">
            I forget my password
          </Link>
          <Link to="/dashboard" className="login button">
            Log In
            <FiArrowRight />
          </Link>
        </section>
        <Link to="/register" className="signup button">
          Sign Up
          <FiArrowRight />
        </Link>
      </S.Auth>
    </S.Container>
  );
};

export default SignIn;
