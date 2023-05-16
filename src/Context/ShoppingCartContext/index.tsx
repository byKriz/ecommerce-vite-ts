import React, { createContext, useState } from "react";
// import { Product } from "../../Interfaces/Product";
import { CartItem } from "../../Interfaces/IteamCart";
import { DetailItem } from "../../Interfaces/DetailItem";

interface Props {
  children: React.ReactNode;
}


export interface ShoppingCartContextType {
  items: CartItem[];
  setItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  isProductDetailOpen: boolean;
  productToShow: DetailItem;
  setProductToShow: React.Dispatch<React.SetStateAction<DetailItem>>;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  items: [],
  setItems: () => {},
  openProductDetail: () => {},
  closeProductDetail: () => {},
  isProductDetailOpen: false,
  productToShow: {},
  setProductToShow: () => {},
});

export const ShoppingCartProvider = ({ children }: Props) => {
  // Shopping Cart - Array of products
  const [items, setItems] = useState<CartItem[]>([]);

  // Product Deatil - Open/Close
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
  const openProductDetail = (): void => setisProductDetailOpen(true);
  const closeProductDetail = (): void => setisProductDetailOpen(false);

  // Product Deatil - Show Product
  const [productToShow, setProductToShow] = useState<DetailItem>({});

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        setItems,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
