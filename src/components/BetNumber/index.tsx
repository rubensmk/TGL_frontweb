/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import * as S from './styles';
import { ButtonProps } from './types';

export const BetNumber: React.FC<ButtonProps> = ({
  value,
  isActive,
  ...rest
}) => {
  return (
    <S.Container {...rest} isActive={isActive}>
      {value + 1}
    </S.Container>
  );
};
