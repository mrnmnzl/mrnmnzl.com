// The three dots that appear in the top right corner of the screen
import React from "react";
import { Dot } from "./dot";

const Dots = ({ location, red, yellow, green, activeDots }) => {
  return (
    <div className="flex group">
      <Dot red={red} location={location} active={!!activeDots} />
      <Dot yellow={yellow} location={location} active={activeDots > 1} />
      <Dot green={green} location={location} active={activeDots > 2} />
    </div>
  );
};

export { Dots };
