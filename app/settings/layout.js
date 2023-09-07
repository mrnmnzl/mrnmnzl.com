import { Dots } from "@/components/dots";
import { MdDarkMode, MdOutlineTagFaces } from "react-icons/md";
import { SettingsNavItem } from "@/components/settings-nav-item";

export default function Layout({ children }) {
  return (
    <main className="settings-page shadow-window">
      <div className="w-[20rem] border-r-[1px] backdrop-blur border-window-border-light bg-glass-window-light dark:bg-glass-window-dark">
        <div className="mb-5">
          <Dots location={"/"} red yellow green activeDots={3} />
        </div>
        <SettingsNavItem location="/settings/user" title="Marion Menzl">
          <MdOutlineTagFaces className="w-6 h-6 mr-1" />
        </SettingsNavItem>
        <SettingsNavItem location="/settings/appearance" title="Appearance">
          <MdDarkMode className="w-6 h-6 mr-1" />
        </SettingsNavItem>
      </div>
      <div className="w-full px-6 bg-window-light dark:bg-window-dark text-text-light dark:text-text-dark">
        {children}
      </div>
    </main>
  );
}
