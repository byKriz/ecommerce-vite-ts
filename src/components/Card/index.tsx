import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const imageTestLink: string =
  "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export const Card = ({ ...cardProps }: Props): JSX.Element => {
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      {...cardProps}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 m-2 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5">
          Electronics
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={imageTestLink} alt="nombre del producto"/>
        <div className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphone</span>
        <span className="text-lg font-medium">$30</span>
      </p>
    </div>
  );
};
