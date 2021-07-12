import styled from 'styled-components';

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 72px 240px 20px 130px;

  @media (max-width: 768px) {
    margin: 58px 0 140px 60px;
  }
  @media (max-width: 425px) {
    margin: 42px 0 140px 20px;
  }
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
    height: 280px;
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

  button {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 34px;
    width: 170px;
    height: 42px;
    border: 0;
    background: var(--white);
    color: var(--light-green);
    font-size: 35px;
    opacity: 1;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
