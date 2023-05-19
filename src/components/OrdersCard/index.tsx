import { Order } from "../../Interfaces/Order";

interface Props {
    order: Order;
}

export const OrdersCard = ({order}: Props): JSX.Element => {
    // const { id, title, images, price, count } = product;

    return (
      <div className="flex justify-between items-center gap-1 border border-black w-80">
        <p className="flex flex-col gap-2">
            <span>Order ID: {order.id}</span>
            <span>Date: {order.creationAt?.toDateString()}</span>
            <span>Total Products: {order.totalProducts}</span>
            <span>Total Price: ${order.totalPrice}</span>
        </p>
      </div>
    );
  };

