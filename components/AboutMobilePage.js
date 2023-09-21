import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MobileCloseButton } from "./MobileCloseButton";
import { cn } from "@/lib/utils";

function AboutMobilePage({ data, className }) {
  return (
    <main
      className={cn(
        " bg-mobile-bar dark:bg-mobile-bg-dark z-[1001] h-full absolute w-full top-0 flex-col",
        className
      )}
    >
      <div className="flex flex-col justify-between w-full pt-16 pl-6">
        <p className="m-0 mb-3 text-4xl font-bold">About</p>
      </div>
      <div className="flex flex-col px-4 border-neutral-200 dark:border-neutral-800">
        <div className="w-full pl-6 mb-8 bg-mobile-bg dark:bg-mobile-bar-dark rounded-xl">
          <div className="flex items-center justify-between py-2 pr-6 text-lg border-b border-neutral-200 dark:border-neutral-600">
            <p className="">Name</p>
            <p className="text-neutral-500">{data.title}</p>
          </div>
          <div className="flex items-center justify-between py-2 pr-6 text-lg">
            <p className="">Type</p>
            <p className="text-neutral-500">{data.subtitle}</p>
          </div>
        </div>
        <div className="w-full pl-6 mb-8 bg-mobile-bg dark:bg-mobile-bar-dark rounded-xl">
          <div className="flex items-center justify-between py-2 pr-6 text-lg border-b border-neutral-200 dark:border-neutral-600">
            <p className="">Framework</p>
            <p className="text-neutral-500">{data.framework}</p>
          </div>
          <div className="flex items-center justify-between py-2 pr-6 text-lg border-b border-neutral-200 dark:border-neutral-600">
            <p className="">Version</p>
            <p className="text-neutral-500">{data.version}</p>
          </div>
          <div className="flex items-center justify-between py-2 pr-6 text-lg">
            <p className="">Styling</p>
            <p className="text-neutral-500">{data.styling}</p>
          </div>
        </div>
        <div className="w-full pl-6 bg-mobile-bg dark:bg-mobile-bar-dark rounded-xl">
          <Link href="/projects/mrnmnzl-com-v2">
            <div className="flex items-center justify-between py-2 pr-6 text-lg">
              <p className="">More Information</p>
              <p className="text-neutral-500">
                <IoIosArrowForward />
              </p>
            </div>
          </Link>
        </div>
        <MobileCloseButton />
      </div>
    </main>
  );
}

export { AboutMobilePage };
