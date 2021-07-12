export interface CartGameProps {
  itemId: number;
  color: string;
  type: string;
  selectedNumbers: string;
  price: number;
  handleDeleteFromCart: (id: number) => void;
}
