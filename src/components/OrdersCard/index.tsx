import { Order } from "../../Interfaces/Order";

interface Props {
    order: Order;
}

export const OrdersCard = ({order}: Props): JSX.Element => {
    // const { id, title, images, price, count } = product;

    return (
      <div className="flex justify-between items-center gap-1 border border-black">
        <p className="flex gap-2">
            <span>{order.creationAt?.toDateString()}</span>
            <span>{order.totalProducts}</span>
            <span>{order.totalPrice}</span>
        </p>
      </div>
    );
  };

