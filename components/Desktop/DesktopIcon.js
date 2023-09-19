import React from "react";
import Link from "next/link";

const DesktopIcon = ({ children, title, location }) => {
  return (
    <Link href={location} className="hidden mb-4 sm:block">
      <div className="flex flex-col w-20 h-20">
        {children}
        <p className="text-xs font-bold text-center text-text-dark">{title}</p>
      </div>
    </Link>
  );
};

export { DesktopIcon };
