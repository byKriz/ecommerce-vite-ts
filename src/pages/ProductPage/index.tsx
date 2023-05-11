import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Params, useParams } from "react-router-dom";
import { Product } from "../../Interfaces/Product";

interface ParamsType extends Params<string> {
  id?: string;
}

export const ProductPage = (): JSX.Element => {
  const [product, setProduct] = useState<Product>();
  const params: ParamsType = useParams();

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  //   console.log(params);

  return (
    <Layout className="flex flex-col items-center w-full h-screen">
      <div className=" w-full h-full flex justify-between items-center">
        <div className="w-1/2">
          <img
            className="w-80% h-auto p-16"
            src={product?.images[0]}
            alt={product?.title}
          />
        </div>
        <div className="flex flex-col w-1/2 h-full justify-center items-center">
          <div className="flex flex-col gap-3 text-lg font-semibold bg-gray-200 mr-5 p-4 rounded-lg">
            <h1 className=" text-3xl">{product?.title}</h1>
            <span className="font-light">Product ID: {product?.id}</span>
            <p>{product?.description}</p>
            <div className=" mt-20 flex w-80% justify-between px-10">
              <span className=" text-4xl">{product?.price}$</span>
              <button className="bg-black text-white px-2 py-0.5 rounded-lg hover:text-yellow-300">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
