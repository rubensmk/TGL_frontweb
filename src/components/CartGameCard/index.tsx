/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import * as S from './styles';

interface CompletedGameCardProps {
  color: string;
  type: string;
  selectedNumbers: string;
  price: string;
}

const CompletedGameCard: React.FC<CompletedGameCardProps> = ({
  color,
  type,
  selectedNumbers,
  price,
}) => {
  return (
    <S.Wrapper>
      <FiTrash2 />
      <S.Container color={color}>
        <strong>{selectedNumbers}</strong>
        <div>
          <h3>{type}</h3>
          <p>{price}</p>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default CompletedGameCard;
