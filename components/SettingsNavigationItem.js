"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useStyleStore } from "@/stores/styleStore";

function SettingsNavigationItem({ location, title, children }) {
  const path = usePathname();
  const isActive = path === location;
  const selectedColor = useStyleStore((state) => state.selectedColor);

  const classes = clsx(
    "flex items-center mx-3 px-1 py-1 rounded text-[13px]",
    isActive
      ? "text-text-dark" + " " + selectedColor.dark
      : "text-text-light dark:text-text-dark"
  );

  return (
    <Link href={location} className={classes}>
      {children}
      {title}
    </Link>
  );
}

export { SettingsNavigationItem };
