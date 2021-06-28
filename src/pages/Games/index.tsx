import React from 'react';
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CartGameCard from '../../components/CartGameCard';
import GameNumber from '../../components/GameNumber';
import SelectGameButton from '../../components/SelectGameButton';
import * as S from './styles';

const Games: React.FC = () => {
  const list = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
  ];

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
            NEW BET <span>FOR MEGA SENA</span>
          </S.Title>
          <p>Choose a game</p>
          <SelectGameButton color="#7F3992">Lotofácil</SelectGameButton>
          <SelectGameButton color="#01AC66">Mega-Sena</SelectGameButton>
          <SelectGameButton color="#F79C31">Quina</SelectGameButton>
          <p>Fill your bet</p>
          <S.Description>
            Fill your bet Mark as many numbers as you want up to a maximum of
            50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers
            drawn.
          </S.Description>
          <S.Numbers>
            {list.map(item => (
              <GameNumber key={item.id} />
            ))}
          </S.Numbers>

          <S.GameOptions>
            <button type="button">Complete Game</button>
            <button type="button">Clear Game</button>
            <button type="button" className="addToCart">
              <FiShoppingCart />
              Add to Cart
            </button>
          </S.GameOptions>
        </S.Game>

        <S.Cart>
          <h1>CART</h1>
          <S.CartList>
            <CartGameCard color="#7F3992" type="Lotofácil" />
            <CartGameCard color="#01AC66" type="Mega-Sena" />
            <CartGameCard color="#F79C31" type="Quina" />
          </S.CartList>
          <S.CartTotal>
            <div>
              <h1>
                CART <span>TOTAL:</span>
              </h1>
              <p>R$7,00</p>
            </div>
            <button type="button">
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
