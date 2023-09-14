"use client";
import { useState, useEffect } from "react";

const LockScreen = ({ children }) => {
  const [isLocked, setIsLocked] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLocked(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return isLocked ? children : null;
};

export { LockScreen };
