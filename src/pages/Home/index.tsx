import { ChangeEvent, useContext, useState } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { ProductDetails } from "../../components/ProductDetail";
import { CheckouSideMenu } from "../../components/CheckoutSideMenu";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";
import { Params, useParams } from "react-router-dom";
import { Product } from "../../Interfaces/Product";

type ChangeEventType = ChangeEvent<HTMLInputElement>;

interface ParamsType {
  category?: Readonly<Params<string>>;
}

export const Home = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const context = useContext(ShoppingCartContext);
  let products = context.products;
  const params: ParamsType = useParams();

  const handleSearch = (e: ChangeEventType) => {
    setSearch(e.target.value.toLocaleLowerCase());
  };

  const searchByCategory = (): Product[] => {
    let productsFiltred: Product[];
    const categories = ["electronics", "furniture", "others", "shoes", "toys"];

    if (typeof params.category === "string") {
      if (categories.indexOf(params.category) !== -1) {
        const categoryIndex = categories.indexOf(params.category);
        productsFiltred = products.filter(
          (product) =>
            product.category.name.toLocaleLowerCase() ===
            categories[categoryIndex].toLocaleLowerCase()
        );
        return productsFiltred;
      }
    }
    return products;
  };

  const filteredData =
    search.length === 0
      ? searchByCategory()
      : searchByCategory().filter((item) =>
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
