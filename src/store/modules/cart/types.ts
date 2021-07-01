export interface ICartItem {
  id: string;
  date: string;
  choosenNumbers: string;
  gameType: string;
  gamePrice: number;
  gameColor: string;
}

export interface ICartState {
  items: ICartItem[];
}
