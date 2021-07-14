/* eslint-disable prettier/prettier */

import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { CompletedCard } from '../../components/CompletedCard';
import { GameTypeButton } from '../../components/GameTypeButton';
import api from '../../services/api';
import { IState } from '../../store';
import { logOut } from '../../store/modules/auth/actions';
import { IUser } from '../../store/modules/auth/types';
import { formatDate } from '../../utils/formatDate';
import { formatValue } from '../../utils/formatValue';
import { CompletedGameProps, GameProps, IFetchGame } from '../Games/types';
import * as S from './styles';


const Dashboard: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(0);
  const [games, setGames] = useState<GameProps[]>([]);
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [completedCart, setCompletedCart] = useState<CompletedGameProps[]>([]);
  const user = useSelector<IState, IUser>(state => state.auth.user);
  const { addToast } = useToasts();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogOut = useCallback(async () => {
    dispatch(logOut());
    history.push('/')
  }, [dispatch, history])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangePage = (event: any, value: number) => {
    setPage(value);
  };

  const handleFilter = async (type: number) => {
    setSelectedFilter(prevState => (prevState === type ? 0 : type));
  };

  useEffect(() => {
    async function loadGames() {
      try {
        const response = await api.get('games');
        const data = response.data.data.map((item: IFetchGame) => ({
          gameId: item.id,
          type: item.type,
          description: item.description,
          range: item.range,
          price: item.price,
          maxNumber: item['max-number'],
          color: item.color,
          minCartValue: item['min-cart-value'],
        }));
        setGames(data);
      } catch (err) {
        addToast('Erro ao carregar jogos recentes.', {
          appearance: 'error',
          autoDismiss: true,
        });
      }

    }
    async function loadCompletedGames() {
      setCompletedCart([]);

      if (selectedFilter === 0) {
        const response = await api.get(`/bets/${user.id}/${page}`)
        const allBetsByUser = response.data;
        setAllPages(allBetsByUser.lastPage);
        allBetsByUser.data.map((item: CompletedGameProps) => setCompletedCart(prevState => [...prevState, item]))
      } else {
        const response = await api.get(`/bets?page=${page}&user=${user.id}&game=${selectedFilter}`)
        const filteredBetsByGameId = response.data
        setAllPages(filteredBetsByGameId.lastPage);
        filteredBetsByGameId.data.map((item: CompletedGameProps) => setCompletedCart(prevState => [...prevState, item]))
      }
    }

    loadGames();
    loadCompletedGames();

  }, [user.id, addToast, page, selectedFilter]);

  return (
    <S.Container>
      <S.Header>
        <h1>TGL</h1>
        <nav>
          <S.AccountButton to="/account">
            Account
          </S.AccountButton>
          <S.LogOutButton onClick={handleLogOut}>
            Logout
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
                  onClick={() => handleFilter(game.gameId)}
                  active={game.gameId === selectedFilter}
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
          <S.PaginationComp count={allPages} onChange={handleChangePage} />
          {completedCart.length === 0 && <span>No recent games available.</span>}
          {completedCart.map(item => (
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

export default Dashboard;
