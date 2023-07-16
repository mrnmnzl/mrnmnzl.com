import Dots from "@/components/dots";
import Link from "next/link";
import { MdDarkMode } from "react-icons/md";

export default function Settings({ children, title }) {
  return (
    <main className="settings-page bg-window-light text-text-light">
      <div className="w-52 border-r-2 border-window-border-light">
        <div className="p-5">
          <Dots green yellow red activeDots={3} />
        </div>
        <a
          href="/settings/appearance"
          className="flex items-center mx-3 px-1 py-1 rounded text-[13px] bg-zinc-300"
        >
          <MdDarkMode className="h-6 w-6 mr-" /> Appearance
        </a>
      </div>
      <div className="px-6">{children}</div>
    </main>
  );
}
