import React, { createContext } from "react";

interface Props {
  children: React.ReactNode;
}

const ShoppingCartContext = createContext(0);

export const ShoppingCartProvider = ({ children }: Props) => {
  return (
    <ShoppingCartContext.Provider value={0}>
        {children}
    </ShoppingCartContext.Provider>
  );
};
