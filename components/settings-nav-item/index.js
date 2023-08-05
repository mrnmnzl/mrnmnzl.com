"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const SettingsNavItem = ({ location, title, children }) => {
  const path = usePathname();
  const isActive = path.includes(location);

  const classes = clsx(
    "flex items-center mx-3 px-1 py-1 rounded text-[13px]",
    isActive ? "bg-highlight-dark text-text-dark" : "text-text-light"
  );

  return (
    <Link href={location} className={classes}>
      {children}
      {title}
    </Link>
  );
};

export { SettingsNavItem };
