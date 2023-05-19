import { TrashIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/solid";
import { MinusIcon } from "@heroicons/react/24/outline";
import { CartItem } from "../../Interfaces/IteamCart";
import { SumRest } from "../CheckoutSideMenu";

interface Props {
  product: CartItem;
  handleDelete?: (id: number) => void;
  handleSumOrRestItem?: (id: number, action: SumRest) => void;
}

export const OrderCard = ({ product, handleDelete,  handleSumOrRestItem}: Props) => {
  const { id, title, images, price, count } = product;

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
            onClick={() => handleSumOrRestItem ? handleSumOrRestItem(id, "minus") : null}
          >
            <MinusIcon />
          </span>
          <span className="flex items-center justify-center bg-gray-200 w-6 h-6 p-1 select-none">
            {count}
          </span>
          <span
            className="flex items-center justify-center w-5 h-5 font-bold text-lg"
            onClick={() => handleSumOrRestItem ? handleSumOrRestItem(id, "plus") : null}
          >
            <PlusIcon />
          </span>
        </p>
        <TrashIcon
          className="w-5 text-black"
          onClick={() => handleDelete ? handleDelete(id) : null}
        />
      </div>
    </div>
  );
};
