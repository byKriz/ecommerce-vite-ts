import React from "react";
import { CartItem } from "../../Interfaces/IteamCart";

interface Props {
  item: CartItem;
}

export const CheckoutItem = ({ item }: Props) => {
  return (
    <div className="flex items-center px-2 w-full h-[100px]" key={item.id}>
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
  );
};
