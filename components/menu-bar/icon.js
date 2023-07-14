import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";

const Icon = ({ url = "/", children }) => (
  <div className="mr-[14px]">
    <a href={url}>{children}</a>
  </div>
);

export default Icon;
