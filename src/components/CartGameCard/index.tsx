/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import * as S from './styles';

interface CompletedGameCardProps {
  color: string;
  type: string;
}

const CompletedGameCard: React.FC<CompletedGameCardProps> = ({
  color,
  type,
}) => {
  return (
    <S.Wrapper>
      <FiTrash2 />
      <S.Container color={color}>
        <strong>01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25</strong>
        <div>
          <h3>{type}</h3>
          <p>R$ 2,50</p>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default CompletedGameCard;
