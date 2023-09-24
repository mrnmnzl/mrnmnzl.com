"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

function DisplayHandler({ loadingScreen, appScreen, className }) {
  const [isLocked, setIsLocked] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLocked(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div
        className={cn(className, {
          hidden: !isLocked,
        })}
      >
        {loadingScreen}
      </div>
      <div
        className={cn(className, {
          hidden: isLocked,
        })}
      >
        {appScreen}
      </div>
    </>
  );
}

export default DisplayHandler;
