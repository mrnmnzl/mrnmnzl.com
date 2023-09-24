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
      className={cn({
        hidden: !isLocked,
      })}
    >
      {children}
    </div>
  );
};

export { LockScreen };
