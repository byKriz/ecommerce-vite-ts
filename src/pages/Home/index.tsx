import { ChangeEvent, useContext, useState } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { ProductDetails } from "../../components/ProductDetail";
import { CheckouSideMenu } from "../../components/CheckoutSideMenu";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";
import { useParams } from "react-router-dom";
import { Product } from "../../Interfaces/Product";

type ChangeEventType = ChangeEvent<HTMLInputElement>;

enum CategoryNames {
  Electronics = "electronics",
  Furniture = "furniture",
  Others = "others",
  Shoes = "shoes",
  Toys = "toys",
}

export const Home = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const context = useContext(ShoppingCartContext);
  let products = context.products;
  const params = useParams();

  const handleSearch = (e: ChangeEventType) => {
    setSearch(e.target.value.toLocaleLowerCase());
  };

  const searchByCategory = (): Product[] => {
    let productsFiltred: Product[];

    if (params.category === CategoryNames.Electronics) {
      productsFiltred = products.filter(
        (p) => p.category.name === CategoryNames.Electronics
      );
      return productsFiltred;
    } else if (params.category === CategoryNames.Furniture) {
      productsFiltred = products.filter(
        (p) => p.category.name === CategoryNames.Furniture
      );
      return productsFiltred;
    } else if (params.category === CategoryNames.Shoes) {
      productsFiltred = products.filter(
        (p) => p.category.name === CategoryNames.Shoes
      );
      return productsFiltred;
    } else if (params.category === CategoryNames.Toys) {
      productsFiltred = products.filter(
        (p) => p.category.name === CategoryNames.Toys
      );
      return productsFiltred;
    } else if (params.category === CategoryNames.Others) {
      productsFiltred = products.filter(
        (p) => p.category.name === CategoryNames.Others
      );
      return productsFiltred;
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
