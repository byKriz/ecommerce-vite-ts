import React, { useContext } from "react";
import { Product } from "../../Interfaces/Product";
import { Link } from "react-router-dom";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../Context/ShoppingCartContext";
import { CartItem } from "../../Interfaces/IteamCart";
import { PlusIcon } from "@heroicons/react/24/outline";

interface Props {
  product: Product;
}

export const handleCart = (
  event: React.SyntheticEvent,
  context: ShoppingCartContextType,
  item: Product
): void => {
  //evitando la propagacion del evento
  event.stopPropagation();
  
  // Agregando productos en el carrito
  context.setItems((prev: CartItem[]) => {
    const itemIndex = prev.findIndex((prod) => prod.id === item.id);

    if (itemIndex === -1) {
      const newItem: CartItem = { ...item, count: 1 };
      return [...prev, newItem];
    }
    const updatedItem: CartItem = { ...prev[itemIndex] };
    updatedItem.count += 1;
    const updatedCart = [...prev];
    updatedCart[itemIndex] = updatedItem;
    return updatedCart;
  });
  context.openCheckoutMenu();
};

export const Card = ({ product }: Props): JSX.Element => {
  const cartContext = useContext(ShoppingCartContext);

  const showProduct = (productDetail: Product): void => {
    cartContext.openProductDetail();
    cartContext.setProductToShow(productDetail);
  };

  return (
    // <Link to={`/product/${product.id}`}>
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 m-2 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5">
          {product.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.images[0]}
          alt="nombre del producto"
        />
        <div
          className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => handleCart(event, cartContext, product)}
        >
          <PlusIcon className="h-6 text-black" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{product.title}</span>
        <span className="text-lg font-medium">{product.price}$</span>
      </p>
    </div>
    // </Link>
  );
};
