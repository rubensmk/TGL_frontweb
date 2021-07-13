/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import * as S from './styles';
import { ButtonProps } from './types';

export const GameTypeButton: React.FC<ButtonProps> = ({
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
