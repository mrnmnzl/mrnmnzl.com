"use client";
import React, { useState, useEffect } from "react";
import LockScreenDesktop from "./LockScreenDesktop";
import LockScreenMobile from "./LockScreenMobile";

const LockScreen = ({}) => {
  const [isLocked, setIsLocked] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLocked(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return isLocked ? (
    <>
      <LockScreenDesktop />
      <LockScreenMobile />
    </>
  ) : null;
};

export default LockScreen;
