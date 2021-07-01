import styled, { css } from 'styled-components';

interface ContainerProps {
  color: string;
  isActive?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 113px;
  height: 34px;
  border-radius: 100px;
  border: 0;
  margin: 0 7px;

  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  background: transparent;
  transition: opacity 0.2s;

  ${props =>
    props.color &&
    css`
      border: 2px solid ${props.color};
      color: ${props.color};
    `}

  &:hover {
    opacity: 0.7;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: ${props.color};
      color: var(--white);
    `}
`;
