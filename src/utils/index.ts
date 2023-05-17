import { ShoppingCartContextType } from "../Context/ShoppingCartContext";

export const totalItems = (context: ShoppingCartContextType) => {
  const total = context.items.reduce((total, item) => total + item.count, 0);
  return total;
};

export const totalPrice = (context: ShoppingCartContextType) => {
  const total = context.items.reduce((total, item) => total + (item.price * item.count), 0);
  return total;
};
