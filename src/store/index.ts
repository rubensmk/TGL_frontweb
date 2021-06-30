import { createStore } from 'redux';
import { IUsersState } from './modules/auth/types';
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  cart: ICartState;
  auth: IUsersState;
}

const store = createStore(rootReducer);

export default store;
