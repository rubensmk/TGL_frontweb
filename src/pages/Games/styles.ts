import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
`;
export const Header = styled.header`
  height: 76px;
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

  @media (max-width: 1024px) {
    height: 64px;
    h1 {
      font-size: 36px;
    }
    nav {
      .home,
      .account,
      .logout {
        font-size: 18px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 1860px;
  padding: 74px 10px 0 130px;

  @media (max-width: 1440px) {
    width: 1440px;
  }
  @media (max-width: 1024px) {
    padding: 52px 10px 0 130px;
    width: 1024px;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    width: 768px;
    padding: 46px 20px 0 100px;
  }
`;

export const Game = styled.div`
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

  @media (max-width: 1440px) {
    p {
      color: var(--gray);
      font-size: 16px;
      margin: 0;

      &:nth-child(2) {
        margin-bottom: 18px;
      }
      &:nth-child(6) {
        margin-top: 22px;
      }
    }
  }
  @media (max-width: 768px) {
    p {
      color: var(--gray);
      font-size: 16px;
      margin: 0;

      &:nth-child(2) {
        margin-bottom: 16px;
      }
      &:nth-child(6) {
        margin-top: 20px;
      }
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

  @media (max-width: 768px) {
    font-size: 18px;
    span {
      font-size: 18px;
    }
  }
`;

export const Description = styled.div`
  width: 900px;
  span {
    color: var(--light-gray);
    font-size: 18px;
    font-weight: 200;
  }
  @media (max-width: 1440px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 600px;
  }
`;

export const Numbers = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
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
  @media (max-width: 1440px) {
    width: 760px;
  }
  @media (max-width: 768px) {
    width: 600px;
  }
`;

export const GameOptions = styled.div`
  display: flex;
  margin-top: 44px;
  margin-bottom: 44px;

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

    &.addToCart {
      text-align: center;
      margin-left: 9rem;
      background: var(--green);
      color: white;
    }
    &:hover {
      opacity: 0.7;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 20px;
      color: white;
    }
  }

  @media (max-width: 768px) {
    button {
      margin-right: 0.6rem;
      &.addToCart {
        margin-left: 4rem;
      }
    }
  }
`;

export const Cart = styled.div`
  position: absolute;
  right: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-gray);
  border-radius: 0.6rem;
  width: 450px;

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

  @media (max-width: 1440px) {
    position: absolute;
    right: 100px;
    width: 380px;
  }
  @media (max-width: 1024px) {
    position: static;
    width: 600px;
    margin-bottom: 40px;
  }
`;

export const CartList = styled.div`
  width: 100%;
  flex-direction: column;
  overflow: auto;
  height: 400px;

  span {
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    color: var(--light-gray);
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1440px) {
    height: 280px;
  }

  @media (max-width: 1440px) {
    height: 200px;
  }
`;
