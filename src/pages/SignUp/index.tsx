import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import * as S from './styles';

const SignUp: React.FC = () => {
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
        <section>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <Link to="/" className="register button">
            Register
            <FiArrowRight />
          </Link>
        </section>
        <Link to="/" className="goBack button">
          <FiArrowLeft />
          Back
        </Link>
      </S.Auth>
    </S.Container>
  );
};

export default SignUp;
