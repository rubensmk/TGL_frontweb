import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CompletedGameCard from '../../components/CompletedGameCard';
import SelectGameButton from '../../components/SelectGameButton';
import * as S from './styles';

const SignIn: React.FC = () => {
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
          <CompletedGameCard color="#7F3992" type="Lotofácil" />
          <CompletedGameCard color="#01AC66" type="Mega-sena" />
          <CompletedGameCard color="#F79C31" type="Quina" />
        </S.RecentGames>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
