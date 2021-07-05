/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    margin-bottom: 28px;
    width: 360px;

      svg{
        width: 20px;
        height: 24px;
        margin-right:14px;
        margin-left:12px;
        color:var(--gray);
      }
    @media(max-width:1380px){
      width:350px;
    }
    @media(max-width:375px){
      width:310px;
      margin-bottom: 14px;

      svg{
        width: 20px;
        height: 22px;
        margin-right:7px;
        margin-left:5px;
      }
    }
    @media (max-width:320px){
      width:260px;

      svg{
        width: 14px;
        height: 16px;
        margin-right:2px;
        margin-left:2px;
      }
    }

`;

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    width: 100%;
    height: 68px;
    margin-right: 15px;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: transparent;

    ${props =>
    props.color &&
    css`
          border-left: 6px solid ${props.color};
        `}

    strong {
      font-size: 15px;
      color: var(--gray);
      margin-bottom: 12px;
    }

    @media(max-width:375px){
      margin-right: 5px;
      padding-left: 5px;
      strong{
        font-size:14px;
      }
    }
    @media (max-width:320px){
      margin:0;
      strong{
        font-size: 12px;
      }
    }

`;

export const Content = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  h3{
  ${props => props.color && css` color: ${props.color}`}
    }

  h4{
    color: var(--gray);
    font-weight: 200;
    margin-left: 12px;
    font-size: 18px;
    }

    @media(max-width:375px){
      h3,h4{
        font-size:15px;
      }
    }
`;
