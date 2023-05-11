import React from "react";

interface Prop {
  children: React.ReactNode;
}

export const Layout = ({ children }: Prop) => {
  return <div className="flex flex-col items-center mt-20">
    {children}
  </div>;
};
