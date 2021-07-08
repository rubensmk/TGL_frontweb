/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';
import { IUsersState } from './types';

const INITIAL_STATE: IUsersState = {
  users: [],
  loggedIn: false,
};

const auth: Reducer<IUsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REGISTER_NEW_USER': {
      const { user } = action.payload;
      return {
        ...state,
        users: [...state.users, user],
      };
    }
    case 'LOGIN_USER': {
      const { response } = action.payload;

      return produce(state, draft => {
        draft.loggedIn = response;
      });
    }
    default: {
      return state;
    }
  }
};

export default auth;
