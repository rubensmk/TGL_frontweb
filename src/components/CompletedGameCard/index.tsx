/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as S from './styles';

interface CompletedGameCardProps {
  listNumbers: string;
  color: string;
  type: string;
  price: string;
}

const CompletedGameCard: React.FC<CompletedGameCardProps> = ({
  color,
  type,
  listNumbers,
  price,
}) => {
  return (
    <S.Container color={color}>
      <strong>{listNumbers}</strong>
      <p>30/11/2020 - ({price})</p>
      <h3>{type}</h3>
    </S.Container>
  );
};

export default CompletedGameCard;
