import Image from "next/image";
import Dots from "@/components/dots";
import portrait from "../../public/images/portrait.jpg";

export default function About() {
  return (
    <main className="about shadow-window bg-window-light text-text-light dark:bg-window-dark dark:text-text-dark">
      <header className="hidden sm:flex flex-none">
        <Dots location="/" red activeDots={1} />
      </header>
      <div className="scale-125 sm:scale-100 flex-1 flex flex-col items-center justify-center">
        <div className="h-[120px] w-[120px] rounded-full overflow-hidden mb-8">
          <Image src={portrait} alt="Portrait of Marion" placeholder="blur" />
        </div>
        <h1 className="text-2xl font-bold">Marion Menzl</h1>
        <p className="text-[11px] text-gray-400 mb-5">Salzburg, Austria</p>
        <table className="mb-5 text-[11px]">
          <tr>
            <td className="pr-2 text-right">Chip</td>
            <td className="text-slate-500">Apple M1 Pro</td>
          </tr>
          <tr>
            <td className="pr-2 text-right">Memory</td>
            <td className="text-slate-500">Good</td>
          </tr>
          <tr>
            <td className="pr-2 text-right">Serial number</td>
            <td className="text-slate-500">abc</td>
          </tr>
          <tr>
            <td className="pr-2 text-right">marionOS</td>
            <td className="text-slate-500">Version 1.26.0</td>
          </tr>
        </table>
        <button className="text-sm py-[1px] px-[10px] bg-button-light dark:bg-button-dark rounded">
          More Info...
        </button>
        <div className="absolute bottom-[150px] sm:hidden">
          <a
            href="/"
            className="h-8 w-8 bg-slate-500 rounded-3xl flex items-center justify-center"
          >
            <span className="text-white font-bold">✕</span>
          </a>
        </div>
      </div>
    </main>
  );
}
