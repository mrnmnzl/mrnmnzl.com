"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const LockScreen = ({ children }) => {
  const [isLocked, setIsLocked] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLocked(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn("opacity-100 transition-opacity duration-200", {
        "opacity-0": !isLocked,
      })}
    >
      {children}
    </div>
  );
};

export { LockScreen };
