import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { OrdersCard } from "../../components/OrdersCard";

export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  const orders = context.orders;

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">MyOrders</h1>
      </div>
      <div className="flex flex-col gap-3">
        {orders.map((order) => (
          <Link to={`/my-orders/${order.id}`} key={order.id}>
            <OrdersCard order={order} />
          </Link>
        ))}
      </div>
    </Layout>
  );
};
