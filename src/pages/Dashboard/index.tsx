/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { CompletedCard } from '../../components/CompletedCard';
import { GameTypeButton } from '../../components/GameTypeButton';
import * as S from './styles';
import { formatValue } from '../../utils/formatValue';
import { CompletedGameProps, GameProps, IFetchGame } from '../Games/types';
import api from '../../services/api';
import { formatDate } from '../../utils/formatDate';
import { IState } from '../../store';
import { IUser } from '../../store/modules/auth/types';


const SignIn: React.FC = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [completedCart, setCompletedCart] = useState<CompletedGameProps[]>([]);
  const [filteredCart, setFilteredCart] = useState<CompletedGameProps[]>([]);
  const user = useSelector<IState, IUser>(state => state.auth.user);

  const handleFilter = (type: string) => {
    let filtered = [...filteredCart];
    setSelectedFilter(prevState => (prevState === type ? '' : type));
    filtered = completedCart.filter(item => item.gameType === type);
    setFilteredCart(filtered);
  };
  useEffect(() => {
    async function loadGames() {
      const response = await api.get('games');
      const data = response.data.data.map((item: IFetchGame) => ({
        type: item.type,
        description: item.description,
        range: item.range,
        price: item.price,
        maxNumber: item['max-number'],
        color: item.color,
        minCartValue: item['min-cart-value'],
      }));
      setGames(data);
    }
    async function loadCompletedGames() {
      const response = await api.get(`users/${user.id}`)
      const { bets } = response.data
      bets.map((item: CompletedGameProps) => setCompletedCart(prevState => [...prevState, item]))
    }
    loadGames();
    loadCompletedGames();
  }, [user.id]);

  return (
    <S.Container>
      <S.Header>
        <h1>TGL</h1>
        <nav>
          <S.AccountButton to="/">
            Account
          </S.AccountButton>
          <S.LogOutButton to="/">
            Sair
            <FiArrowRight />
          </S.LogOutButton>
        </nav>
      </S.Header>
      <S.Content>
        <S.Options>
          <S.Filters>
            <h2>RECENT GAMES</h2>
            <p>Filters</p>
            <div>
              {games.map(game => (
                <GameTypeButton
                  onClick={() => handleFilter(game.type)}
                  active={game.type === selectedFilter}
                  color={game.color}
                  key={game.type}
                >
                  {game.type}
                </GameTypeButton>
              ))}
            </div>
          </S.Filters>
          <S.NewBetButton to="/games">
            New Bet
            <FiArrowRight />
          </S.NewBetButton>
        </S.Options>
        <S.RecentGames>
          {completedCart.length === 0 && filteredCart.length === 0 && <span>No recent games available.</span>}
          {selectedFilter === ''
            ? completedCart.map(item => (
              <CompletedCard
                key={item.id}
                date={formatDate(item.created_at)}
                listNumbers={item.choosenNumber}
                color={item.gameColor}
                type={item.gameType}
                price={formatValue(item.gamePrice)}
              />
            ))
            : filteredCart.map(item => (
              <CompletedCard
                key={item.id}
                date={formatDate(item.created_at)}
                listNumbers={item.choosenNumber}
                color={item.gameColor}
                type={item.gameType}
                price={formatValue(item.gamePrice)}
              />
            ))}
        </S.RecentGames>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
