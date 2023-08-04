import Image from "next/image";
import Dots from "@/components/dots";
import portrait from "../../public/images/portrait.jpg";

export default function About() {
  return (
    <main className="about-page shadow-window bg-window-light text-text-light dark:bg-window-dark dark:text-text-dark">
      <header className="flex-none hidden sm:flex">
        <Dots location="/" red activeDots={1} />
      </header>
      <div className="flex flex-col items-center justify-center flex-1 scale-125 sm:scale-100">
        <div className="h-[120px] w-[120px] rounded-full overflow-hidden mb-8">
          <Image src={portrait} alt="Portrait of Marion" placeholder="blur" />
        </div>
        <h1 className="text-2xl font-bold">mrnmnzl.com</h1>
        <p className="text-[11px] text-gray-400 mb-5">by Marion Menzl</p>
        <table className="mb-5 text-[11px]">
          <tr>
            <td className="pr-2 text-right">Framework</td>
            <td className="text-slate-500">Next.js</td>
          </tr>
          <tr>
            <td className="pr-2 text-right">Version</td>
            <td className="text-slate-500">13.4.9</td>
          </tr>
          <tr>
            <td className="pr-2 text-right">Styling</td>
            <td className="text-slate-500">Tailwind CSS</td>
          </tr>
        </table>
        <button className="text-sm py-[1px] px-[10px] bg-button-light dark:bg-button-dark rounded">
          More Info...
        </button>
        <div className="absolute bottom-[150px] sm:hidden">
          <a
            href="/"
            className="flex items-center justify-center w-8 h-8 bg-slate-500 rounded-3xl"
          >
            <span className="font-bold text-white">✕</span>
          </a>
        </div>
      </div>
    </main>
  );
}
