/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: string;
};

const SelectGameButton: React.FC<ButtonProps> = ({
  children,
  color,
  ...rest
}) => {
  return (
    <S.Container color={color} type="button" {...rest}>
      {children}
    </S.Container>
  );
};

export default SelectGameButton;
