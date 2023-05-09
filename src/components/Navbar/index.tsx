import { NavLink } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLElement> {}

export const Navbar = ({ ...navProps }: Props): JSX.Element => {
  const activeStyle: string = "underline underline-offset-4";

  return (
    <nav
      className="flex justify-between items-center w-full fixed z-10 py-5 px-8 mt-4 text-sm font-light"
      {...navProps}
    >
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/clothes"
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/electronics"
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/furnitures"
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/toys"
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/others"
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>email@generico.com</li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/my-orders"
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/my-account"
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/sign-in"
          >
            sign In
          </NavLink>
        </li>
        <li>Carrito 0</li>
      </ul>
    </nav>
  );
};
