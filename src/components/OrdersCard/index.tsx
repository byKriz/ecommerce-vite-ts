import { Order } from "../../Interfaces/Order";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";

interface Props {
  order: Order;
}

export const OrdersCard = ({ order }: Props): JSX.Element => {
  // const { id, title, images, price, count } = product;

  return (
    <div className="flex justify-between items-center gap-1 border border-black w-80 rounded-lg px-3 py-2">
      <p className="flex gap-2 w-full justify-between items-center">
        <div className="flex flex-col">
          <span className="font-light">Order ID: {order.id}</span>
          <span className="font-light">
            Date: {order.creationAt?.toDateString()}
          </span>
          <span className="font-light">
            Total Products: {order.totalProducts}
          </span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <span className="font-medium text-2xl">${order.totalPrice}</span>
          <ChevronDoubleRightIcon className="w-7 h-7" />
        </div>
      </p>
    </div>
  );
};
