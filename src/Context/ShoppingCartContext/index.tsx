import React, { createContext, useState } from "react";
// import { Product } from "../../Interfaces/Product";
import { CartItem } from "../../Interfaces/IteamCart";

interface Props {
  children: React.ReactNode;
}

export interface ShoppingCartContextType {
  items: CartItem[];
  setItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  items: [],
  setItems: () => {},
});

export const ShoppingCartProvider = ({ children }: Props) => {
  const [items, setItems] = useState<CartItem[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
