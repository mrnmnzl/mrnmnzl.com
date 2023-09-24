import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dots } from "@/components/Dots";

function AboutDesktopPage({ data, className }) {
  return (
    <main
      className={cn(
        "about-page shadow-window bg-window-light text-text-light dark:bg-window-dark dark:text-text-dark",
        className
      )}
    >
      <header className="flex-0">
        <Dots location="/" red activeDots={1} />
      </header>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="h-[120px] w-[120px] rounded-full overflow-hidden mb-8">
          <Image
            src={data.portrait.asset.url}
            alt="Portrait of Marion"
            placeholder="blur"
            blurDataURL={data.portrait.asset.metadata.lqip}
            layout="responsive"
            width={data.portrait.asset.metadata.dimensions.width}
            height={data.portrait.asset.metadata.dimensions.height}
          />
        </div>
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="text-[11px] text-gray-400 mb-5">{data.subtitle}</p>
        <table className="mb-5 text-[11px]">
          <tbody>
            <tr>
              <td className="pr-2 text-right">Framework</td>
              <td className="text-slate-500">{data.framework}</td>
            </tr>
            <tr>
              <td className="pr-2 text-right">Version</td>
              <td className="text-slate-500">{data.version}</td>
            </tr>
            <tr>
              <td className="pr-2 text-right">Styling</td>
              <td className="text-slate-500">{data.styling}</td>
            </tr>
          </tbody>
        </table>
        <Link
          href="projects/mrnmnzl-com"
          className="text-sm py-[1px] px-[10px] bg-button-light dark:bg-button-dark rounded"
        >
          More Info...
        </Link>
      </div>
    </main>
  );
}

export { AboutDesktopPage };
