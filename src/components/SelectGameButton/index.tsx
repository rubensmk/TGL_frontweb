/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: string;
  active?: boolean;
};

const SelectGameButton: React.FC<ButtonProps> = ({
  children,
  color,
  active,
  ...rest
}) => {
  return (
    <S.Container isActive={active} color={color} type="button" {...rest}>
      {children}
    </S.Container>
  );
};

export default SelectGameButton;
