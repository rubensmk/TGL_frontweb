/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';
import { AuthState } from './types';
import api from '../../../services/api';

const INITIAL_STATE: AuthState = {
  token: '',
  user: {
    id: '',
    username: '',
    email: '',
    created_at: '',
    updated_at: '',
  },
  loggedIn: false,
};

const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_USER': {
      const { response } = action.payload;

      return produce(state, draft => {
        api.defaults.headers.authorization = `Bearer ${response.token.token}`;
        draft.token = response.token;
        draft.user = response.user;

        if (draft.token) {
          draft.loggedIn = true;
        }
      });
    }
    default: {
      return state;
    }
  }
};

export default auth;
