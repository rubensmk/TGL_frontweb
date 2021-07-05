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
`;
