/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import * as S from './styles';

interface CompletedGameCardProps {
  itemId: string;
  color: string;
  type: string;
  selectedNumbers: string;
  price: number;
  handleDeleteFromCart: (id: string) => void;
}

const CompletedGameCard: React.FC<CompletedGameCardProps> = ({
  color,
  type,
  selectedNumbers,
  price,
  itemId,
  handleDeleteFromCart,
}) => {
  return (
    <S.Wrapper>
      <button type="button" onClick={() => handleDeleteFromCart(itemId)}>
        <FiTrash2 />
      </button>
      <S.Container color={color}>
        <strong>{selectedNumbers}</strong>
        <div>
          <h3>{type}</h3>
          <p>
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default CompletedGameCard;
