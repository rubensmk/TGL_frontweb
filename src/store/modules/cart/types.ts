export interface ICartItem {
  choosenNumbers: string;
  gameType: string;
  gamePrice: string;
  gameColor: string;
}

export interface ICartState {
  items: ICartItem[];
}
