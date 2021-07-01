export interface CartGameProps {
  itemId: string;
  color: string;
  type: string;
  selectedNumbers: string;
  price: number;
  handleDeleteFromCart: (id: string) => void;
}
