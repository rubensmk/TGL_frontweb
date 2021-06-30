import { Reducer } from 'redux';
import { IUsersState } from './types';

const INITIAL_STATE: IUsersState = {
  users: [],
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
    default: {
      return state;
    }
  }
};

export default auth;
