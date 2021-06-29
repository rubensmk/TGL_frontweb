/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: number;
  isActive?: boolean;
}

const GameNumber: React.FC<ButtonProps> = ({ value, isActive, ...rest }) => {
  return (
    <S.Container {...rest} isActive={isActive}>
      {value + 1}
    </S.Container>
  );
};

export default GameNumber;
