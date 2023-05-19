import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../Context/ShoppingCartContext";
import { OrderCard } from "../OrderCard";
import { totalItems, totalPrice } from "../../utils";
import { Order } from "../../Interfaces/Order";
import { Link } from "react-router-dom";

export const CheckouSideMenu = (): JSX.Element => {
  const context: ShoppingCartContextType = useContext(ShoppingCartContext);

  const handleCheckout = (): void => {
    const orderToAdd: Order = {
      creationAt: new Date(),
      products: context.items,
      totalProducts: context.items.length,
      totalPrice: totalPrice(context),
    };

    context.setOrders([...context.orders, orderToAdd]);
    context.setItems([]);
  };

  return (
    <aside
      className={
        context.isCheckoutMenuOpen
          ? "flex flex-col justify-start fixed right-0 top-[80px] border bg-white border-black rounded-lg w-[400px] h-[calc(100vh-80px)]"
          : "hidden"
      }
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => context.closeCheckoutMenu()}>
          <XCircleIcon className="w-6" />
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 overflow-y-auto flex-1">
        {context.items.map((product) => (
          <OrderCard product={product} key={product.id} />
        ))}
      </div>
      <div className="px-4 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">
            SubTotal ({totalItems(context)} products):{" "}
          </span>
          <span className="font-medium text-2xl">${totalPrice(context)}</span>
        </p>
        <Link to={'/my-orders/last'}>
          <button className="bg-black w-full py-3 text-white font-bold rounded-lg hover:text-yellow-300" onClick={handleCheckout}>Checkout</button>
        </Link>
      </div>
    </aside>
  );
};
