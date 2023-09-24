"use client";

import { useState, useEffect } from "react";
import { MenuBar } from "@/components/MenuBar";
import { Desktop } from "@/components/Desktop";
import { Dock } from "@/components/Dock";
import { LockScreenDesktop } from "@/components/LockScreen/LockScreenDesktop";
import { LockScreenMobile } from "@/components/LockScreen/LockScreenMobile";

function DisplayHandler({ children }) {
  const [isLocked, setIsLocked] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLocked(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return isLocked ? (
    <>
      <LockScreenDesktop className="hidden sm:flex" />
      <LockScreenMobile className="flex sm:hidden" />
    </>
  ) : (
    <>
      <MenuBar title="mrnmnzl" />
      <Desktop>{children}</Desktop>
      <Dock />
    </>
  );
}

export default DisplayHandler;
