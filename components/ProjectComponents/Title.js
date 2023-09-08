import React from "react";

const Title = ({ children, title = "", date = null }) => {
  function getYear(date) {
    const parsedDate = new Date(date);
    return parsedDate.getFullYear();
  }

  return (
    <h1 className="mb-4 text-4xl font-bold">
      {children ? children : title}
      {date ? <span className="ml-2 text-base">({getYear(date)})</span> : null}
    </h1>
  );
};

export { Title };
