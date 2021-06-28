/* eslint-disable prettier/prettier */
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

  h1{
    color:var(--gray);
    position: relative;
    top: 5px;
    padding-bottom: 5px;
    font-size: 44px;
    font-style: italic;
    margin:  16px 64px 4px 144px;
    border-bottom: 6px solid #B5C401;
    border-radius: 4px;
    }


  nav{
    display: flex;
    align-items: center;
    margin-right: 200px;

    .account{
      text-decoration: none;
      color: var(--gray);
      margin-right: 48px;
      font-size: 21px;
      font-style: italic;
    }

    .logout{
      text-decoration: none;
      color: var(--gray);
      margin-right: 48px;
      font-size: 21px;
      font-style: italic;

      svg{
        margin-left: 20px;
      }

    }

    .button{
    opacity: 1;
    transition: opacity 0.2s;

    &:hover{
      opacity:0.7;
    }
  }

  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 72px  196px  205px 130px;
`;

export const Options = styled.section`
  display: flex;
  align-items: center;

  h2{
    font-size:24px;
    color: var(--gray);
  }

  .new-bet{
    text-decoration: none;
    display: flex;
    align-items: center;
    width: 190px;
    height: 28px;
    border: 0;
    background: transparent;
    color: var(--light-green);
    font-size: 35px;
    transition: opacity 0.2s;

    &:hover{
      opacity:0.7;
    }
    svg{
      margin-left: 11px;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  width: 445px;
  margin-left: 60px;
  margin-right:283px;

  p{
    text-decoration: none;
    color: #868686;
    font-size: 17px;
    font-weight: 100;
    margin-right: 15px;
  }
`;

export const RecentGames = styled.div``;





