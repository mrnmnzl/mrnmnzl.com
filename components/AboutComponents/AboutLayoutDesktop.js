import Image from "next/image";
import { Dots } from "@/components/Dots";

function AboutLayoutDesktop({ aboutData }) {
  return (
    <main className="hidden sm:flex about-page shadow-window bg-window-light text-text-light dark:bg-window-dark dark:text-text-dark">
      <header className="flex-none">
        <Dots location="/" red activeDots={1} />
      </header>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="h-[120px] w-[120px] rounded-full overflow-hidden mb-8">
          <Image
            src={aboutData.portrait.asset.url}
            alt="Portrait of Marion"
            placeholder="blur"
            blurDataURL={aboutData.portrait.asset.metadata.lqip}
            layout="responsive"
            width={aboutData.portrait.asset.metadata.dimensions.width}
            height={aboutData.portrait.asset.metadata.dimensions.height}
          />
        </div>
        <h1 className="text-2xl font-bold">{aboutData.title}</h1>
        <p className="text-[11px] text-gray-400 mb-5">{aboutData.subtitle}</p>
        <table className="mb-5 text-[11px]">
          <tbody>
            <tr>
              <td className="pr-2 text-right">Framework</td>
              <td className="text-slate-500">{aboutData.framework}</td>
            </tr>
            <tr>
              <td className="pr-2 text-right">Version</td>
              <td className="text-slate-500">{aboutData.version}</td>
            </tr>
            <tr>
              <td className="pr-2 text-right">Styling</td>
              <td className="text-slate-500">{aboutData.styling}</td>
            </tr>
          </tbody>
        </table>
        <button className="text-sm py-[1px] px-[10px] bg-button-light dark:bg-button-dark rounded">
          More Info...
        </button>
      </div>
    </main>
  );
}

export { AboutLayoutDesktop };
