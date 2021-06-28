import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 65px;
    color: var(--gray);
    margin-bottom: 30px;
  }
  button {
    width: 144px;
    height: 39px;
    border: 0;
    border-radius: 100px;
    background: var(--light-green);
    color: var(--white);
    font-size: 22px;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 84px;
    color: var(--gray);
  }
`;

export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 35px;
    color: var(--gray);
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffff;
    border-radius: 14px;
    border: 1px solid var(--border-gray);
    width: 352px;
    height: 195px;
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

  .sendLink {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 44px;
    width: 240px;
    height: 42px;
    border: 0;
    background: var(--white);
    color: var(--light-green);
    font-size: 35px;

    svg {
      margin-left: 20px;
    }
  }

  .goBack {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 30px;
    width: 190px;
    height: 42px;
    border: 0;
    background: transparent;
    color: var(--gray);
    font-size: 35px;

    svg {
      margin-left: 20px;
    }
  }

  .button {
    opacity: 1;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
