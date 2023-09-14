import React from "react";
import Link from "next/link";

const Icon = ({ url = "/", children }) => (
  <div className="mr-[17px]">
    <Link href={url}>{children}</Link>
  </div>
);

export { Icon };
