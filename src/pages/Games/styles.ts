import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
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

    .home {
      text-decoration: none;
      color: var(--gray);
      margin-right: 48px;
      font-size: 21px;
      font-style: italic;
    }

    .account {
      text-decoration: none;
      color: var(--gray);
      margin-right: 48px;
      font-size: 21px;
      font-style: italic;
    }

    .logout {
      text-decoration: none;
      color: var(--gray);
      margin-right: 48px;
      font-size: 21px;
      font-style: italic;

      svg {
        margin-left: 20px;
      }
    }
  }

  @media (max-width: 678px) {
    height: 56px;

    h1 {
      font-size: 30px;
      margin: 16px 24px 5px 64px;
    }
    nav {
      margin-right: 90px;
    }
  }
  @media (max-width: 520px) {
    height: 56px;

    h1 {
      font-size: 24px;
      margin: 16px 14px 5px 18px;
    }
    nav {
      margin-right: 5px;
      .home,
      .account,
      .logout {
        font-size: 16px;
        margin-right: 18px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 74px 20px 0 130px;

  @media (max-width: 1325px) {
    flex-direction: column;
    padding-bottom: 40px;
  }
  @media (max-width: 678px) {
    padding: 44px 20px 0 60px;
  }
  @media (max-width: 520px) {
    padding: 28px 5px 0 14px;
  }
  @media (max-width: 430px) {
    padding: 28px 5px 0 5px;
  }
  @media (max-width: 380px) {
    align-items: center;
    padding: 28px 5px 0 5px;
  }
`;

export const Game = styled.div`
  width: 70%;
  p {
    color: var(--gray);
    font-size: 18px;
    margin: 0;

    &:nth-child(2) {
      margin-bottom: 20px;
    }
    &:nth-child(6) {
      margin-top: 28px;
    }
  }
  div {
    display: flex;
    margin-bottom: 20px;
  }

  @media (max-width: 1324px) {
    width: 100%;
  }
  @media (max-width: 520px) {
    div.gamebuttons {
      flex-direction: column;
    }
  }
`;

export const Title = styled.h1`
  color: var(--gray);
  font-size: 24px;
  margin-bottom: 33px;

  span {
    color: var(--light-gray);
    font-size: 24px;
    font-weight: 200;
  }
`;

export const Description = styled.div`
  width: 100%;
  padding-right: 80px;

  span {
    color: var(--light-gray);
    font-size: 18px;
    font-weight: 200;
  }
`;

export const Numbers = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 27px;

  span {
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    color: var(--light-gray);
    display: flex;
    justify-content: center;
  }
`;

export const GameOptions = styled.div`
  display: flex;
  margin-top: 44px;
  margin-bottom: 44px;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 10.25rem;
    height: 3.25rem;
    border-radius: 0.7rem;
    font-size: 0.9rem;
    font-weight: bold;
    font-style: normal;
    background: transparent;
    margin-right: 1.25rem;
    opacity: 1;
    border: 1px solid var(--green);
    color: var(--green);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
  .addToCart {
    text-align: center;
    margin-left: 9rem;
    background: var(--green);
    color: white;

    svg {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 20px;
      color: white;
    }
  }
  div {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 840px) {
    button {
      width: 8.25rem;
      height: 3.25rem;
      margin-right: 1rem;

      &.addToCart {
        margin-left: 5rem;
      }
    }
  }
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      justify-content: space-between;
    }

    button {
      width: 12.25rem;
      height: 4.25rem;

      &.addToCart {
        margin: 0;
        margin-top: 30px;
      }
    }
  }
  @media (max-width: 520px) {
    width: 90%;
    button {
      width: 9.25rem;
      height: 4.25rem;

      &.addToCart {
        margin-top: 10px;
      }
    }
  }
  @media (max-width: 430px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    div {
      justify-content: center;
      flex-direction: column;
    }
    button {
      width: 12.25rem;
      height: 4.25rem;

      &.addToCart {
        width: 15rem;
      }
    }
  }
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-gray);
  border-radius: 0.6rem;
  height: 100%;
  width: 420px;

  h1 {
    color: var(--light-gray);
    font-size: 1.5rem;
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
    margin-left: 1.25rem;
  }

  div {
    display: flex;
    h1 {
      color: var(--gray);
      font-size: 1.5rem;

      span {
        color: var(--gray);
        font-size: 1.5rem;
        font-weight: 100;
      }
    }

    p {
      display: flex;
      align-items: center;
      color: var(--gray);
      font-size: 1.5rem;
      font-weight: 100;
      margin-left: 15px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 96px;
    border: 0;
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    background: var(--border-gray);
    color: var(--green);
    font-size: 2.25rem;
    font-weight: bold;
    font-style: italic;
  }

  @media (max-width: 1380px) {
    width: 360px;
  }

  @media (max-width: 1325px) {
    width: 400px;
  }
  @media (max-width: 430px) {
    width: 380px;
  }
  @media (max-width: 400px) {
    width: 360px;
  }
`;

export const CartList = styled.div`
  width: 100%;
  flex-direction: column;
  overflow: auto;
  height: 280px;

  span {
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    color: var(--light-gray);
    display: flex;
    justify-content: center;
  }
`;
