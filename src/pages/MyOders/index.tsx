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
      <h1>MyOrders</h1>
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
