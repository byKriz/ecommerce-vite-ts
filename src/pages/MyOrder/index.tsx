import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";
import { OrderCard } from "../../components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const existOrder = () => {
    const order = context.orders.slice(-1)[0];
    if (order?.products) {
      return true;
    }
    return false;
  };

  return (
    <Layout>
      <div className="flex justify-center items-center w-80 relative mb-4">
        <Link to={"/my-orders"} className="absolute left-0">
          <ChevronLeftIcon className="h-8 w-8 text-black cursor-pointer" />
        </Link>
          <h1>MY ORDER</h1>
      </div>
      <div className="flex flex-col gap-2 w-80">
        {existOrder()
          ? context.orders
              .slice(-1)[0]
              .products?.map((product) => (
                <OrderCard product={product} key={product.id} />
              ))
          : null}
      </div>
    </Layout>
  );
};
