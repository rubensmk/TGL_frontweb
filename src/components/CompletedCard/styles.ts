/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 60%;
  height: 120px;
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;


  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-radius: 5px;
  background-color: white;

  ${props =>
    props.color &&
    css`
        border-left: 6px solid ${props.color};
      `}

  strong {
    font-size: 20px;
    overflow-wrap: break-word;
    color: var(--gray);
    margin-bottom: 15px;
  }
  p {
    color: var(--gray);
    font-weight: 200;
    margin-bottom: 11px;
  }

  h3 {
    ${props =>
    props.color &&
    css`
        color: ${props.color};
      `}
  }
`;
