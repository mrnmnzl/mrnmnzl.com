import { cn } from "@/lib/utils";
import { MobileCloseButton } from "@/components/MobileCloseButton";

function SettingsMobileLayout({ children, className }) {
  return (
    <main
      className={cn(
        "bg-mobile-bar z-[1001] h-full absolute w-full top-0 flex-col",
        className
      )}
    >
      {children}
      <MobileCloseButton />
    </main>
  );
}

export { SettingsMobileLayout };
