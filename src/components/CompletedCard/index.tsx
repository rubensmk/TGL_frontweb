/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import * as S from './styles';
import { CompletedCardProps } from './types';

export const CompletedCard: React.FC<CompletedCardProps> = ({
  color,
  type,
  listNumbers,
  price,
  date,
}) => {
  return (
    <S.Container color={color}>
      <strong>{listNumbers}</strong>
      <p>
        {date} - ({price})
      </p>
      <h3>{type}</h3>
    </S.Container>
  );
};
