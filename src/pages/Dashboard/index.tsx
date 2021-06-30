/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CompletedGameCard from '../../components/CompletedGameCard';
import SelectGameButton from '../../components/SelectGameButton';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import * as S from './styles';
import { formatValue } from '../../utils/formatValue';

interface GameProps {
  type: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  minCartValue: number;
}

interface CartProps {
  id: string;
  choosenNumbers: string;
  gameType: string;
  gamePrice: number;
  gameColor: string;
}

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
      const data = response.data.types.map((item: any) => ({
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
            {games.map(game => (
              <SelectGameButton
                onClick={() => handleFilter(game.type)}
                active={game.type === selectedFilter}
                color={game.color}
                key={game.type}
              >
                {game.type}
              </SelectGameButton>
            ))}
          </S.Filters>
          <Link to="/games" className="new-bet button">
            New Bet
            <FiArrowRight />
          </Link>
        </S.Options>

        <S.RecentGames>
          {selectedFilter === ''
            ? reduxCart.map(item => (
              <CompletedGameCard
                key={item.id}
                listNumbers={item.choosenNumbers}
                color={item.gameColor}
                type={item.gameType}
                price={formatValue(item.gamePrice)}
              />
            ))
            : filteredCart.map(item => (
              <CompletedGameCard
                key={item.id}
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
