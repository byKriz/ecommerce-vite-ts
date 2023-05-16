import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../Context/ShoppingCartContext";

export const ProductDetails = (): JSX.Element => {
  const cartContext: ShoppingCartContextType = useContext(ShoppingCartContext);
  // console.log("Product to show: ", cartContext.productToShow);

  const productItem = cartContext.productToShow;

  return (
    <aside
      className={
        cartContext.isProductDetailOpen
          ? "flex flex-col justify-start fixed right-0 top-[80px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]"
          : "hidden"
      }
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => cartContext.closeProductDetail()}>
          <XCircleIcon className="w-6" />
        </div>
      </div>
      <figure className="px-6">
        {productItem.images ? (
          <img
            className="w-full h-full rounded-lg"
            src={productItem.images[0]}
            alt={productItem.title}
          />
        ) : (
          <img src={""} alt={productItem.title} />
        )}
      </figure>
      <p className="flex flex-col p-6">
        <span className=" font-medium text-2xl text-green-500 mb-2">${productItem.price}</span>
        <span className=" font-medium text-md">{productItem.title}</span>
        <span className=" font-light text-sm">{productItem.description}</span>
      </p>
    </aside>
  );
};
