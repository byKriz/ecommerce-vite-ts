interface Props {
    totalPrice: number;
    totalProducts: number;
}

export const OrdersCard = ({totalPrice, totalProducts}: Props): JSX.Element => {
    // const { id, title, images, price, count } = product;

    return (
      <div className="flex justify-between items-center gap-1 border border-black">
        <p>
            <span>01.02.2023</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>
      </div>
    );
  };

