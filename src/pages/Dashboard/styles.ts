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

  }
`;


