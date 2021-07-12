import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  height: 100vh;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  height: 76px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--border-gray);

  h1 {
    color: var(--gray);
    position: relative;
    top: 5px;
    padding-bottom: 5px;
    font-size: 44px;
    font-style: italic;
    margin: 16px 64px 4px 144px;
    border-bottom: 6px solid #b5c401;
    border-radius: 4px;
  }

  nav {
    display: flex;
    align-items: center;
    margin-right: 200px;
  }

  @media (max-width: 768px) {
    height: 57px;
    display: flex;
    justify-content: space-around;

    h1 {
      font-size: 28px;
      margin: 0;
    }
    nav {
      margin: 0;
    }
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const GoBackButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--gray);
  margin-right: 48px;
  font-size: 21px;
  font-style: italic;
  opacity: 1;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  svg {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-right: 0;
    svg {
      margin-left: 10px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 72px 240px 20px 130px;

  @media (max-width: 768px) {
    margin: 58px 0 140px 60px;
  }
  @media (max-width: 425px) {
    margin: 42px 0 140px 20px;
  }
`;

export const Profile = styled.div`
  h2 {
    font-size: 24px;
    color: var(--gray);
    margin-right: 45px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffff;
    border-radius: 14px;
    border: 1px solid var(--border-gray);
    width: 352px;
    height: 337px;
    margin-top: 26px;
  }

  input {
    color: var(--gray);
    padding: 34px;
    font-size: 18px;
    border: 0;
    border-radius: 14px 14px 0 0;
    border-bottom: 2px solid #ebebeb;
    width: 350px;
    height: 72px;

    &::placeholder {
      color: var(--light-gray);
    }
  }

  strong {
    margin-top: 7px;
    font-size: 16px;
    color: var(--gray);

    p {
      font-weight: normal;
    }
  }

  .login {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 28px;
    width: 170px;
    height: 42px;
    border: 0;
    background: var(--white);
    color: var(--light-green);
    font-size: 35px;
  }

  .button {
    opacity: 1;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const PasswordChange = styled.div`
  h2 {
    font-size: 24px;
    color: var(--gray);
    margin-right: 45px;
  }

  button {
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 300px;
    height: 70px;
    border: 0;
    background: transparent;
    color: var(--light-green);
    font-size: 26px;
    opacity: 1;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
