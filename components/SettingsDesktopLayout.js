import { cn } from "@/lib/utils";
import { Dots } from "@/components/Dots";
import { MdDarkMode, MdOutlineTagFaces } from "react-icons/md";
import { SettingsNavigationItem } from "@/components/SettingsNavigationItem";

function SettingsDesktopLayout({ children, className }) {
  return (
    <main className={cn("settings-page shadow-window", className)}>
      <div className="w-[20rem] border-r-[1px] backdrop-blur border-window-border-light bg-glass-window-light dark:bg-glass-window-dark">
        <Dots location={"/"} red activeDots={3} />
        <SettingsNavigationItem location="/settings" title="Marion Menzl">
          <MdOutlineTagFaces className="w-6 h-6 mr-1" />
        </SettingsNavigationItem>
        <SettingsNavigationItem
          location="/settings/appearance"
          title="Appearance"
        >
          <MdDarkMode className="w-6 h-6 mr-1" />
        </SettingsNavigationItem>
      </div>
      <div className="w-full px-6 bg-window-light dark:bg-window-dark text-text-light dark:text-text-dark">
        {children}
      </div>
    </main>
  );
}

export { SettingsDesktopLayout };
