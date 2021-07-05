/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications'
import { CartGameCard } from '../../components/CartGameCard';
import { BetNumber } from '../../components/BetNumber';
import { GameTypeButton } from '../../components/GameTypeButton';
import { addItemsToReduxCart } from '../../store/modules/cart/actions';
import * as S from './styles';
import { ICartItem } from '../../store/modules/cart/types';
import { formatValue } from '../../utils/formatValue';
import { GameProps, IFetchGame, NumberProps } from './types';

const Games: React.FC<NumberProps> = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState('');
  const [limit, setLimit] = useState(0);
  const [range, setRange] = useState(0);
  const [minCartValue, setMinCartValue] = useState(0);
  const [betNumbers, setBetNumbers] = useState<number[]>([]);
  const [selectedGame, setSelectedGame] = useState('');
  const [choosedNumbers, setChoosedNumbers] = useState<number[]>([]);
  const [cartList, setCartList] = useState<ICartItem[]>([]);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToasts();


  const handleSelectGame = (game: GameProps) => {
    setChoosedNumbers([]);
    setSelectedGame(game.type);
    setMinCartValue(game.minCartValue);
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
      addToast(`Já foram selecionados o número limite do jogo: ${limit}, finalize adicionando ao carrinho. 🛒`, { appearance: 'warning', autoDismiss: true })
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
    let newTotal = total;
    const newCartItem = {
      id: new Date().toISOString(),
      date: new Date().toLocaleDateString('pt-BR'),
      choosenNumbers: numbers.sort((a, b) => a - b).toString(),
      gameType: selectedGame,
      gamePrice: price,
      gameColor: color,
    };

    if (numbers.length === limit) {
      newTotal += newCartItem.gamePrice;
      setTotal(newTotal);
      setCartList([...cartList, newCartItem]);
    } else {
      addToast(`É preciso escolher o número limite de ${limit} números para finalizar uma jogada.`, { appearance: 'warning', autoDismiss: true })
    }
  };

  const handleRemoveFromCart = async (id: string) => {
    let totalPrice = 0;
    const cartItems = [...cartList];
    const cartItemsFiltered = cartItems.filter((item) => item.id !== id);

    cartItemsFiltered.map((item) => totalPrice += item.gamePrice);
    setTotal(totalPrice);
    setCartList(cartItemsFiltered);
  }

  const handleSave = useCallback((allCartItems: ICartItem[]) => {
    if (total >= minCartValue) {
      allCartItems.map(item => {
        dispatch(addItemsToReduxCart(item))
      });
      history.push('/dashboard');
      addToast('Suas apostas foram salvas com sucesso!, Boa sorte.', { appearance: 'success', autoDismiss: true })
    } else {
      addToast(`Você precisa completar o valor mínimo de ${formatValue(minCartValue)} para salvar.`, { appearance: 'warning', autoDismiss: true })
    }

  },
    [dispatch, history, total, minCartValue, addToast],
  );

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
          <div className="gamebuttons">
            {games.map(game => (
              <GameTypeButton
                onClick={() => handleSelectGame(game)}
                active={game.type === selectedGame}
                color={game.color}
                key={game.type}
              >
                {game.type}
              </GameTypeButton>
            ))}
          </div>
          <p>Fill your bet</p>
          <S.Description><span>{description}</span></S.Description>
          <S.Numbers>
            {betNumbers.length === 0 && <span>Choose a game to fill the numbers</span>}
            {betNumbers.map(number => (
              <BetNumber
                isActive={choosedNumbers.includes(number + 1)}
                key={number}
                value={number}
                onClick={() => handleSelectNumber(number)}
              />
            ))}
          </S.Numbers>

          <S.GameOptions>
            <div>
              <button type="button" onClick={handleCompleteGame}>
                Complete Game
              </button>
              <button type="button" onClick={handleClearGame}>
                Clear Game
              </button>
            </div>
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
            {cartList.length === 0 && <span>This cart is empty.</span>}
            {cartList &&
              cartList.map(item => {
                return (
                  <CartGameCard
                    key={item.id}
                    itemId={item.id}
                    handleDeleteFromCart={handleRemoveFromCart}
                    selectedNumbers={item.choosenNumbers}
                    price={item.gamePrice}
                    color={item.gameColor}
                    type={item.gameType}
                  />
                );
              })}
          </S.CartList>
          <div>
            <h1>
              CART <span>TOTAL:</span>
            </h1>
            <p>{formatValue(total)}
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleSave(cartList)}
          >
            Save
            <FiArrowRight />
          </button>
        </S.Cart>
      </S.Content>
    </S.Container>
  );
};

export default Games;
