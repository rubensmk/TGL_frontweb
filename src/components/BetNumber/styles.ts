/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

import { ContainerProps } from './types';



export const Container = styled.button<ContainerProps>`

    cursor: pointer;
    border: 0;
    color: white;
    background: #adc0c4;
    border-radius: 2.25rem;
    font-size: 1.25rem;
    font-weight: bold;
    width: 4rem;
    height: 4rem;
    margin: 0.6rem 0.6rem;

    ${props =>
    props.isActive &&
    css`
        background: var(--green);
      `}

    @media (max-width:425px){
      width:3rem;
      height:3rem;
      font-size: 1.2rem;
    }

`;
