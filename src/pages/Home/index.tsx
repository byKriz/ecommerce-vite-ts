import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { Product } from "../../Interfaces/Product";

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      // .catch((error) => console.error(error));
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </Layout>
  );
};
