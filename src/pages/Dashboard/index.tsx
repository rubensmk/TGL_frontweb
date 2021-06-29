import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CompletedGameCard from '../../components/CompletedGameCard';
import SelectGameButton from '../../components/SelectGameButton';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import * as S from './styles';

const SignIn: React.FC = () => {
  const reduxCart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  return (
    <S.Container>
      <S.Header>
        <h1>TGL</h1>
        <nav>
          <Link to="/" className="account button">
            Account
          </Link>
          <Link to="/" className="logout button">
            Sair
            <FiArrowRight />
          </Link>
        </nav>
      </S.Header>
      <S.Content>
        <S.Options>
          <h2>RECENT GAMES</h2>
          <S.Filters>
            <p>Filters</p>
            <SelectGameButton color="#7F3992">Lotofácil</SelectGameButton>
            <SelectGameButton color="#01AC66">Mega-Sena</SelectGameButton>
            <SelectGameButton color="#F79C31">Quina</SelectGameButton>
          </S.Filters>
          <Link to="/games" className="new-bet button">
            New Bet
            <FiArrowRight />
          </Link>
        </S.Options>

        <S.RecentGames>
          {reduxCart.map(item => (
            <CompletedGameCard
              listNumbers={item.choosenNumbers}
              color={item.gameColor}
              type={item.gameType}
              price={item.gamePrice}
            />
          ))}
        </S.RecentGames>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
