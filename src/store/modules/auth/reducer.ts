/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import producer from 'immer';
import { Reducer } from 'redux';

import api from '../../../services/api';
import { AuthState } from './types';

const INITIAL_STATE: AuthState = {
  token: {
    token: '',
  },
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
  return producer(state, draft => {
    switch (action.type) {
      case 'LOGIN_USER': {
        const { response } = action.payload;
        api.defaults.headers.authorization = `Bearer ${response.token.token}`;

        localStorage.setItem('@TGL:token', JSON.stringify(response.token));
        localStorage.setItem('@TGL:user', JSON.stringify(response.user));

        draft.token = response.token;
        draft.user = response.user;

        if (draft.token) {
          draft.loggedIn = true;
        }
        break;
      }
      case 'LOGOUT_USER': {
        localStorage.removeItem('@TGL:token');
        localStorage.removeItem('@TGL:user');

        // draft.token = { token: '' };
        // draft.user = {
        //   id: '',
        //   username: '',
        //   email: '',
        //   created_at: '',
        //   updated_at: '',
        // };
        // draft.loggedIn = false;
        draft = state;
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default auth;
