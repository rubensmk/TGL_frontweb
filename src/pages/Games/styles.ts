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
`;

export const Content = styled.div`
  display: flex;
  margin: 74px 200px 35px 130px;
`;

export const Game = styled.div`
  margin-right: 20px;

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

export const Description = styled.span`
  width: 648px;
  color: var(--light-gray);
  font-size: 18px;
  font-weight: 200;
`;

export const Numbers = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
  flex-wrap: wrap;
  margin-top: 27px;
`;

export const GameOptions = styled.div`
  display: flex;
  margin-top: 44px;

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
`;

export const Cart = styled.aside`
  border: 1px solid var(--border-gray);
  border-radius: 0.6rem;
  width: 24rem;
  height: 700px;

  h1 {
    color: var(--light-gray);
    font-size: 1.5rem;
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
    margin-left: 1.25rem;
  }
`;

export const CartList = styled.div`
  width: 100%;
  height: 400px;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

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
`;
