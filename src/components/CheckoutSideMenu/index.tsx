import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../Context/ShoppingCartContext";

export const CheckouSideMenu = (): JSX.Element => {
  const context: ShoppingCartContextType = useContext(ShoppingCartContext);
  // console.log("Product to show: ", cartContext.productToShow);

  // const productItem = context.productToShow;

  return (
    <aside
      className={
        context.isCheckoutMenuOpen
          ? "flex flex-col justify-start fixed right-0 top-[80px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]"
          : "hidden"
      }
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => context.closeCheckoutMenu()}>
          <XCircleIcon className="w-6" />
        </div>
      </div>
    </aside>
  );
};
