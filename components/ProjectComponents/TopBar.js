import React from "react";

const TopBar = ({ title, icon }) => {
  return (
    <p className="flex-none py-2 pl-4">
      <span className="mr-2">{icon}</span>
      {title}
    </p>
  );
};

export { TopBar };
