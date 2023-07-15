import React from "react";

const Icon = ({ url = "/", children }) => (
  <div className="mr-[17px]">
    <a href={url}>{children}</a>
  </div>
);

export default Icon;
