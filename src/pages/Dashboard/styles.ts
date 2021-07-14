/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';

import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;

  @media(max-width:425px){
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
  }

  @media(max-width:768px){
    height: 57px;
    display: flex;
    justify-content: space-around;

    h1{
      font-size: 28px;
      margin:  0;
      }
    nav{
      margin:0;
    }
  }

  @media(max-width:425px){
    width: 100%;
  }
`;

export const AccountButton = styled(Link)`
      text-decoration: none;
      color: var(--gray);
      margin-right: 48px;
      font-size: 21px;
      font-style: italic;
      opacity: 1;
      transition: opacity 0.2s;

      &:hover{
        opacity:0.7;
      }

      @media(max-width:768px){
        font-size: 18px;
      }
`;

export const LogOutButton = styled.button`
      display: flex;
      border: 0;
      background: transparent;
      align-items: center;
      text-decoration: none;
      color: var(--gray);
      margin-right: 48px;
      font-size: 21px;
      font-style: italic;
      opacity: 1;
      transition: opacity 0.2s;

      &:hover{
        opacity:0.7;
      }

      svg{
        margin-left: 20px;
      }

      @media(max-width:768px){
        font-size: 18px;
        margin-right: 0;
        svg{
        margin-left: 10px;
      }
      }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 72px  240px  20px 130px;

  @media(max-width:768px){
    margin: 58px 0 140px 60px;
  }
  @media(max-width:425px){
    margin: 42px 0 140px 20px;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;

  @media(max-width:1330px){
    flex-direction: column;
    align-items: flex-start;
  }

`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  width: 700px;

  h2{
    font-size:24px;
    color: var(--gray);
    margin-right: 45px;
  }

  p{
    text-decoration: none;
    color: #868686;
    font-size: 17px;
    font-weight: 100;
    margin-right: 15px;
  }

  @media(max-width:768px){
    flex-direction: column;
    align-items:flex-start;
    justify-content:center;
    width: 100%;

    h2{
      font-size:20px;
      margin-bottom: 20px;
    }

    p{
      font-size:16px;
      margin-bottom: 7px;
    }
  }

  @media(max-width:1330px){
    margin-bottom:40px;
  }

  @media(max-width:455px){
    div{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const NewBetButton = styled(Link)`
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

`;

export const RecentGames = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  width:920px;

  span {
      font-size: 18px;
      font-style: normal;
      font-weight: 200;
      color: var(--light-gray);
      display: flex;
      margin-top: 30px;
    }

  @media(max-width:1047px){
    width:700px
  }
  @media(max-width:425px){
    width: 400px;
  }
`;

export const PaginationComp = styled(Pagination)`
  margin-top: 12px;
  button{
    color: var(--gray)
  }
`;

