import React, { createContext, useState } from "react";
import { Product } from "../../Interfaces/Product";

interface Props {
  children: React.ReactNode;
}

export interface ShoppingCartContextType {
  count: Product[];
  setCount: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  count: [],
  setCount: () => {}
});

export const ShoppingCartProvider = ({ children }: Props) => {
  const [count, setCount] = useState<Product[]>([]);
  // console.log("COUNT: ", count);
  

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
