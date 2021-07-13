/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { formatValue } from '../../utils/formatValue';
import * as S from './styles';
import { CartGameProps } from './types';

export const CartGameCard: React.FC<CartGameProps> = ({
  color,
  type,
  selectedNumbers,
  price,
  itemId,
  handleDeleteFromCart,
}) => {
  return (
    <S.Wrapper>
      <FiTrash2 onClick={() => handleDeleteFromCart(itemId)} />
      <S.Container color={color}>
        <strong>{selectedNumbers}</strong>
        <S.Content color={color}>
          <h3>{type}</h3>
          <h4>{formatValue(price)}</h4>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};
