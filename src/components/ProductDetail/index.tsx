import React from "react";

export const ProductDetails = (): JSX.Element => {
  return (
    <aside className="flex flex-col fixed right-0 top-[80px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>X</div>
      </div>
    </aside>
  );
};
