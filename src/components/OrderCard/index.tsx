import { useContext } from "react";
import { TrashIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/solid";
import { MinusIcon } from "@heroicons/react/24/outline";
import { CartItem } from "../../Interfaces/IteamCart";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

interface Props {
  product: CartItem;
}

type SumRest = "minus" | "plus";

export const OrderCard = ({ product }: Props) => {
  const { id, title, images, price, count } = product;

  const context = useContext(ShoppingCartContext);

  const deleteProduct = (id: number): void => {
    const fileredProducts = context.items.filter((product) => product.id != id);
    context.setItems(fileredProducts);
  };

  const sumOrRestItem = (id: number, action: SumRest): void => {
    const newProducts = [...context.items];
    const itemIndex = newProducts.findIndex((prod) => prod.id === id);
    if (action === "minus") {
      if (newProducts[itemIndex].count >= 1) {
        newProducts[itemIndex].count = newProducts[itemIndex].count - 1;
        context.setItems(newProducts);
      }
      if (newProducts[itemIndex].count < 1) {
        deleteProduct(id);
      }
    } else if (action === "plus") {
      newProducts[itemIndex].count = newProducts[itemIndex].count + 1;
      context.setItems(newProducts);
    }
  };

  return (
    <div className="flex justify-between items-center gap-1">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={images[0]}
            alt={title}
          />
        </figure>
        <div className="flex flex-col flex-wrap">
          <span className="text-lg font-medium text-green-500">${price}</span>
          <p className="text-sm font-light">{title}</p>
        </div>
      </div>
      <div className="flex">
        <p className="flex justify-center items-center gap-1">
          <span
            className="flex items-center justify-center w-5 h-5 font-bold text-lg"
            onClick={() => sumOrRestItem(id, "minus")}
          >
            <MinusIcon />
          </span>
          <span className="flex items-center justify-center bg-gray-200 w-6 h-6 p-1">
            {count}
          </span>
          <span
            className="flex items-center justify-center w-5 h-5 font-bold text-lg"
            onClick={() => sumOrRestItem(id, "plus")}
          >
            <PlusIcon />
          </span>
        </p>
        <TrashIcon
          className="w-5 text-black"
          onClick={() => deleteProduct(id)}
        />
      </div>
    </div>
  );
};
