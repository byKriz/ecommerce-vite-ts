import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyAccount } from "../pages/MyAccount";
import { MyOrders } from "../pages/MyOders";
import { MyOrder } from "../pages/MyOrder";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";

export const AppRoutes = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => {
  const routes: React.ReactElement | null = useRoutes([
    {
      path: "/",
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
      path: "/my-order",
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
  ]);

  return routes;
};
