export interface GameProps {
  type: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  minCartValue: number;
}
export interface IFetchGame {
  type: string;
  description: string;
  range: number;
  price: number;
  'max-number': number;
  color: string;
  'min-cart-value': number;
}

export interface NumberProps {
  value: number;
}

export interface CartProps {
  id: string;
  date: string;
  choosenNumbers: string;
  gameType: string;
  gamePrice: number;
  gameColor: string;
}
