export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUsersState {
  users: IUser[];
  loggedIn: boolean;
}
