import clsx from "clsx";
import React from "react";

const Main = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <main className={clsx("min-h-screen", className)}>{children}</main>;
};

export default Main;
