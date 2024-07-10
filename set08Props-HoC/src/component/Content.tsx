import React from "react";
interface ContentProps {
  children: any;
}
export const Content = ({ children }: ContentProps) => {
  return <div className="flex flex-1 ml-14">{children}</div>;
};
