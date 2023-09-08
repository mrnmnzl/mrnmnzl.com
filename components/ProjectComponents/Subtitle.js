import React from "react";

const Subtitle = ({ children, title = "" }) => {
  return (
    <h2 className="mt-6 mb-2 text-xl font-bold">
      {children ? children : title}
    </h2>
  );
};

export { Subtitle };
