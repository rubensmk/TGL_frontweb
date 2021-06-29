/* eslint-disable array-callback-return */
/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import CartGameCard from '../../components/CartGameCard';
import GameNumber from '../../components/GameNumber';
import SelectGameButton from '../../components/SelectGameButton';
import { addItemsToReduxCart } from '../../store/modules/cart/actions';
import * as S from './styles';
import { ICartItem } from '../../store/modules/cart/types';

interface GameProps {
  type: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  minCartValue: number;
}

interface NumberProps {
  value: number;
}

interface CartProps {
  choosenNumbers: string;
  gameType: string;
  gamePrice: string;
  gameColor: string;
}

const Games: React.FC<NumberProps> = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState('');
  const [limit, setLimit] = useState(0);
  const [range, setRange] = useState(0);
  const [betNumbers, setBetNumbers] = useState<number[]>([]);
  const [selectedGame, setSelectedGame] = useState('');
  const [choosedNumbers, setChoosedNumbers] = useState<number[]>([]);
  const [cartList, setCartList] = useState<CartProps[]>([]);
  const dispatch = useDispatch();
  const history = useHistory();


  const handleSelectGame = (game: GameProps) => {
    setChoosedNumbers([]);
    setSelectedGame(game.type);
    setColor(game.color);
    setPrice(game.price);
    setLimit(game.maxNumber);
    setTitle(game.type.toUpperCase());
    setDescription(game.description);
    setRange(game.range);
    setBetNumbers(Array.from(Array(game.range).keys()));
  };

  const handleSelectNumber = (selectedNum: number) => {
    const newEntry = selectedNum + 1;
    const numbers = [...choosedNumbers];

    if (numbers.includes(newEntry)) {
      numbers.splice(numbers.indexOf(newEntry), 1);
      setChoosedNumbers(numbers);
    } else if (numbers.length >= limit) {
      alert(
        `Já foram selecionados o número limite do jogo: ${limit}, finalize adicionando ao carrinho. 🛒`,
      );
    } else {
      numbers.push(newEntry);
      setChoosedNumbers(numbers);
    }
  };

  const handleClearGame = () => {
    setChoosedNumbers([]);
  };

  const handleCompleteGame = () => {
    const numbers = [...choosedNumbers];
    const min = 1;

    if (numbers.length === 0) {
      for (let i = 0; i < limit; i++) {
        let randomNum = Math.floor(Math.random() * range) + min;
        let check = numbers.includes(randomNum);

        if (check === false) {
          numbers.push(randomNum);
          setChoosedNumbers(numbers);
        } else {
          while (check === true) {
            randomNum = Math.floor(Math.random() * range) + min;
            check = numbers.includes(randomNum);
            if (check === false) {
              numbers.push(randomNum);
              setChoosedNumbers(numbers);
            }
          }
        }
      }
    }
    if (numbers.length > 0) {
      const changedMax = limit - numbers.length;
      for (let i = 0; i < changedMax; i++) {
        let randomNum = Math.floor(Math.random() * range) + min;
        let check = numbers.includes(randomNum);

        if (check === false) {
          numbers.push(randomNum);
          setChoosedNumbers(numbers);
        } else {
          while (check === true) {
            randomNum = Math.floor(Math.random() * range) + min;
            check = numbers.includes(randomNum);
            if (check === false) {
              numbers.push(randomNum);
              setChoosedNumbers(numbers);
            }
          }
        }
      }
    }
  };

  const handleAddToCart = () => {
    const numbers = [...choosedNumbers];
    const newCartList = {
      choosenNumbers: numbers.sort((a, b) => a - b).toString(),
      gameType: selectedGame,
      gamePrice: price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
      gameColor: color,
    };
    setCartList([...cartList, newCartList]);
  };

  const handleSave = useCallback((allCartItems: ICartItem[]) => {
    allCartItems.map(item => {
      dispatch(addItemsToReduxCart(item))
    });
    history.push('/dashboard');
  },
    [dispatch, history],
  );

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
          <Link to="/dashboard" className="home">
            Home
          </Link>
          <Link to="/" className="account">
            Account
          </Link>
          <Link to="/" className="logout">
            Logout
          </Link>
        </nav>
      </S.Header>

      <S.Content>
        <S.Game>
          <S.Title>
            NEW BET <span>FOR {title}</span>
          </S.Title>
          <p>Choose a game</p>
          {games.map(game => (
            <SelectGameButton
              onClick={() => handleSelectGame(game)}
              active={game.type === selectedGame}
              color={game.color}
              key={game.type}
            >
              {game.type}
            </SelectGameButton>
          ))}
          <p>Fill your bet</p>
          <S.Description>{description}</S.Description>
          <S.Numbers>
            {betNumbers.map(number => (
              <GameNumber
                isActive={choosedNumbers.includes(number + 1)}
                key={number}
                value={number}
                onClick={() => handleSelectNumber(number)}
              />
            ))}
          </S.Numbers>

          <S.GameOptions>
            <button type="button" onClick={handleCompleteGame}>
              Complete Game
            </button>
            <button type="button" onClick={handleClearGame}>
              Clear Game
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className="addToCart"
            >
              <FiShoppingCart />
              Add to Cart
            </button>
          </S.GameOptions>
        </S.Game>

        <S.Cart>
          <h1>CART</h1>
          <S.CartList>
            {cartList &&
              cartList.map(item => {
                return (
                  <CartGameCard
                    selectedNumbers={item.choosenNumbers}
                    price={item.gamePrice}
                    color={item.gameColor}
                    type={item.gameType}
                  />
                );
              })}
          </S.CartList>
          <S.CartTotal>
            <div>
              <h1>
                CART <span>TOTAL:</span>
              </h1>
              <p>R$7,00</p>
            </div>
            <button
              type="button"
              onClick={() => handleSave(cartList)}
            >
              Save
              <FiArrowRight />
            </button>
          </S.CartTotal>
        </S.Cart>
      </S.Content>
    </S.Container>
  );
};

export default Games;
