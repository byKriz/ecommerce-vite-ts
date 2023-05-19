import React, { createContext, useState } from "react";
// import { Product } from "../../Interfaces/Product";
import { CartItem } from "../../Interfaces/IteamCart";
import { DetailItem } from "../../Interfaces/DetailItem";
import { Order } from "../../Interfaces/Order";

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
  isCheckoutMenuOpen: boolean;
  openCheckoutMenu: () => void;
  closeCheckoutMenu: () => void;
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  items: [],
  setItems: () => {},
  openProductDetail: () => {},
  closeProductDetail: () => {},
  isProductDetailOpen: false,
  productToShow: {},
  setProductToShow: () => {},
  isCheckoutMenuOpen: false,
  openCheckoutMenu: () => {},
  closeCheckoutMenu: () => {},
  orders: [],
  setOrders: () => {},
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

  // Checkout - Show
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
  const openCheckoutMenu = (): void => setIsCheckoutMenuOpen(true);
  const closeCheckoutMenu = (): void => setIsCheckoutMenuOpen(false);

  // Shopping Cart - Order
  const [orders, setOrders] = useState<Order[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        setItems,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        isCheckoutMenuOpen,
        openCheckoutMenu,
        closeCheckoutMenu,
        orders,
        setOrders,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
