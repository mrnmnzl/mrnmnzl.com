"use client";
import { AppearanceMobilePage } from "@/components/AppearanceMobilePage";
import { AppearanceDesktopPage } from "@/components/AppearanceDesktopPage";

function AppearancePage() {
  return (
    <>
      <AppearanceDesktopPage className="hidden sm:block" />
      <AppearanceMobilePage className="flex sm:hidden" />
    </>
  );
}

export default AppearancePage;
