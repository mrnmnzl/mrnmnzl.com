"use client";

import React, { useEffect, useState } from "react";
import LockScreenDesktop from "./LockScreenDesktop";
import LockScreenMobile from "./LockScreenMobile";

const LockScreen = () => {
  const [isLocked, setIsLocked] = useState(true);
  useEffect(() => setTimeout(() => setIsLocked(false), 1500), []);

  return (
    isLocked && (
      <>
        <LockScreenDesktop />
        <LockScreenMobile />
      </>
    )
  );
};

export default LockScreen;
