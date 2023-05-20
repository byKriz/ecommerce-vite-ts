import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyAccount } from "../pages/MyAccount";
import { MyOrders } from "../pages/MyOders";
import { MyOrder } from "../pages/MyOrder";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { ProductPage } from "../pages/ProductPage";

type AppRoutesType = React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null;

export const AppRoutes = (): AppRoutesType => {
  const routes: React.ReactElement | null = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:category",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/product/:id",
      element: <ProductPage />,
    },
  ]);

  return routes;
};
