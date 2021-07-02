/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { CompletedCard } from '../../components/CompletedCard';
import { GameTypeButton } from '../../components/GameTypeButton';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import * as S from './styles';
import { formatValue } from '../../utils/formatValue';
import { CartProps, GameProps, IFetchGame } from '../Games/types';

const SignIn: React.FC = () => {
  const reduxCart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  const [games, setGames] = useState<GameProps[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filteredCart, setFilteredCart] = useState<CartProps[]>([]);

  const handleFilter = (type: string) => {
    let filtered = [...filteredCart];
    setSelectedFilter(prevState => (prevState === type ? '' : type));
    filtered = reduxCart.filter(item => item.gameType === type);
    setFilteredCart(filtered);
  };
  useEffect(() => {
    async function loadGames() {
      const response = await axios.get('games.json');
      const data = response.data.types.map((item: IFetchGame) => ({
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
    loadGames();
  }, []);

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
          {reduxCart.length === 0 && filteredCart.length === 0 && <span>No recent games available.</span>}
          {selectedFilter === ''
            ? reduxCart.map(item => (
              <CompletedCard
                key={item.id}
                date={item.date}
                listNumbers={item.choosenNumbers}
                color={item.gameColor}
                type={item.gameType}
                price={formatValue(item.gamePrice)}
              />
            ))
            : filteredCart.map(item => (
              <CompletedCard
                key={item.id}
                date={item.date}
                listNumbers={item.choosenNumbers}
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
