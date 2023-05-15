import React, { createContext, useState } from "react";
// import { Product } from "../../Interfaces/Product";
import { CartItem } from "../../Interfaces/IteamCart";

interface Props {
  children: React.ReactNode;
}

export interface ShoppingCartContextType {
  items: CartItem[];
  setItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  isProductDetailOpen: boolean;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  items: [],
  setItems: () => {},
  openProductDetail: () => {},
  closeProductDetail: () => {},
  isProductDetailOpen: false,
});

export const ShoppingCartProvider = ({ children }: Props) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false);

  const openProductDetail = (): void => setisProductDetailOpen(true);
  const closeProductDetail = (): void => setisProductDetailOpen(false);

  // console.log('Cart: ', items);

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        setItems,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
