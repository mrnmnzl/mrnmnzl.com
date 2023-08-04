import Dots from "@/components/dots";
import Link from "next/link";
import { MdDarkMode, MdFormatPaint, MdOutlineTagFaces } from "react-icons/md";

export default function Settings({ children, title }) {
  return (
    <main className="settings-page shadow-window">
      <div className="w-[20rem] border-r-[1px] backdrop-blur border-window-border-light bg-glass-window-light">
        <div className="p-5">
          <Dots location={"/"} red yellow green activeDots={3} />
        </div>
        <Link
          href="/settings/user"
          className="flex items-center mx-3 px-1 py-1 rounded text-[13px] text-text-light"
        >
          <MdOutlineTagFaces className="w-6 h-6 mr-1" /> Marion Menzl
        </Link>
        <Link
          href="/settings/appearance"
          className="flex items-center mx-3 px-1 py-1 rounded text-[13px] bg-highlight-dark text-text-dark"
        >
          <MdDarkMode className="w-6 h-6 mr-1" />
          Appearance
        </Link>
        <Link
          href="/settings/wallpaper"
          className="flex items-center mx-3 px-1 py-1 rounded text-[13px] text-text-light"
        >
          <MdFormatPaint className="w-6 h-6 mr-1" />
          Wallpaper
        </Link>
      </div>
      <div className="w-full px-6 bg-window-light text-text-light">
        {children}
      </div>
    </main>
  );
}
