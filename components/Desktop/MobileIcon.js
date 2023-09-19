import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileIcon = ({ children, title, location, className }) => {
  return (
    <Link href={location} className="sm:hidden">
      <div className="h-[55px] w-[55px]">
        <div
          className={cn(
            "flex-c-c shrink-0 w-full h-full rounded-[10px] shadow-app-icon",
            className
          )}
        >
          <div className="flex-c-c h-[80%] w-[80%] m-0 ">{children}</div>
        </div>
        <p className="mt-1 text-xs font-semibold text-center text-text-dark">
          {title}
        </p>
      </div>
    </Link>
  );
};

export { MobileIcon };
