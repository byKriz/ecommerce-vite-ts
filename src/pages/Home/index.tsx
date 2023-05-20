import { ChangeEvent, useContext, useState } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { ProductDetails } from "../../components/ProductDetail";
import { CheckouSideMenu } from "../../components/CheckoutSideMenu";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

type ChangeEventType = ChangeEvent<HTMLInputElement>;

export const Home = () => {
  const [search, setSearch] = useState<string>("");
  const context = useContext(ShoppingCartContext);
  const products = context.products;

  const handleSearch = (e: ChangeEventType) => {
    setSearch(e.target.value.toLocaleLowerCase());
  };

  const filteredData =
    search.length === 0
      ? products
      : products.filter((item) =>
          item.title.toLocaleLowerCase().includes(search)
        );

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="mb-4 text-center rounded-lg border border-black w-80 p-4"
        onChange={(e: ChangeEventType) => handleSearch(e)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {filteredData.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
      <ProductDetails />
      <CheckouSideMenu />
    </Layout>
  );
};
