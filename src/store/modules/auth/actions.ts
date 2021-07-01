/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { IUser } from './types';

export function registerNewUser(user: IUser) {
  return {
    type: 'REGISTER_NEW_USER',
    payload: {
      user,
    },
  };
}

export function logIn(response: boolean) {
  return {
    type: 'LOGIN_USER',
    payload: {
      response,
    },
  };
}
