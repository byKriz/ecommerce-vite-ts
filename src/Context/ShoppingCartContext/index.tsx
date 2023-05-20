import React, { createContext, useEffect, useState } from "react";
import { CartItem } from "../../Interfaces/IteamCart";
import { DetailItem } from "../../Interfaces/DetailItem";
import { Order } from "../../Interfaces/Order";
import { Product } from "../../Interfaces/Product";

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
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
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
  products: [],
  setProducts: () => {},
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

  // Refactorination of api calls - Get Products
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

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
        products,
        setProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
