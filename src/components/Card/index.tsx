import { Product } from "../../Interfaces/Product";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export const Card = ({ product }: Props): JSX.Element => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        <figure className="relative mb-2 w-full h-4/5">
          <span className="absolute bottom-0 left-0 m-2 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5">
            {product.category}
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src={product.image}
            alt="nombre del producto"
          />
          <div className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
            +
          </div>
        </figure>
        <p className="flex justify-between">
          <span className="text-sm font-light">{product.title}</span>
          <span className="text-lg font-medium">{product.price}$</span>
        </p>
      </div>
    </Link>
  );
};
