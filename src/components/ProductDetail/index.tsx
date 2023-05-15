import React, { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../Context/ShoppingCartContext";
import { CartItem } from "../../Interfaces/IteamCart";

export const ProductDetails = (): JSX.Element => {
  const cartContext: ShoppingCartContextType = useContext(ShoppingCartContext);

  const totalPrice = (): number => {
    const price = cartContext.items.reduce((sum, item) => {
      return sum + item.price * item.count;
    }, 0);
    return price;
  };

  return (
    <aside
      className={
        cartContext.isProductDetailOpen
          ? "flex flex-col justify-between fixed right-0 top-[80px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]"
          : "hidden"
      }
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => cartContext.closeProductDetail()}>
          <XCircleIcon className="w-6" />
        </div>
      </div>
      <div className="flex flex-col mt-4 gap-4 w-full h-[80%] py-2 overflow-y-auto">
        {cartContext.items.map((item: CartItem) => (
          <div
            className="flex items-center px-2 w-full h-[100px]"
            key={item.id}
          >
            <div className=" w-1/2 h-full container">
              <img
                src={item.images[0]}
                alt={item.title}
                className="h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="">{item.title}</h3>
              <span>{item.price}$</span>
              <span>X{item.count}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full h-[10%] items-center justify-center">
        <span>Total: ${totalPrice()}</span>
      </div>
    </aside>
  );
};
