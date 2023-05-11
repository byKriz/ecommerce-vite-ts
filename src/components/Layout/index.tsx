import React from "react";

interface Prop extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Layout = ({ children, ...layoutProps }: Prop) => {
  return (
    <div className="flex flex-col items-center mt-20" {...layoutProps}>
      {children}
    </div>
  );
};
