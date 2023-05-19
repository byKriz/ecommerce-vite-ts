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
      {orders.map((order, index) => (
        <Link to={`/my-orders/${order.id}`} key={index}>
          <OrdersCard
            totalPrice={order.totalPrice ? order.totalPrice : NaN}
            totalProducts={order.totalProducts ? order.totalProducts : NaN}
          />
        </Link>
      ))}
    </Layout>
  );
};
