import Link from "next/link";
import { MobileCloseButton } from "../MobileCloseButton";
import { IoIosArrowForward } from "react-icons/io";

function AboutLayoutMobile({ aboutData }) {
  return (
    <main className="flex sm:hidden bg-mobile-bar dark:bg-mobile-bg-dark z-[1001] h-full absolute w-full top-0 flex-col">
      <div className="flex flex-col justify-between w-full pt-16 pl-6">
        <p className="m-0 mb-3 text-4xl font-bold">About</p>
      </div>
      <div className="flex flex-col px-4">
        <div className="w-full pl-6 mb-8 bg-mobile-bg dark:bg-mobile-bar-dark rounded-xl">
          <div className="flex items-center justify-between py-4 pr-6 text-lg border-b">
            <p className="text-text-light">Name</p>
            <p className="text-neutral-500">{aboutData.title}</p>
          </div>
          <div className="flex items-center justify-between py-4 pr-6 text-lg">
            <p className="text-text-light">Type</p>
            <p className="text-neutral-500">{aboutData.subtitle}</p>
          </div>
        </div>
        <div className="w-full pl-6 mb-8 bg-mobile-bg dark:bg-mobile-bar-dark rounded-xl">
          <div className="flex items-center justify-between py-4 pr-6 text-lg border-b">
            <p className="text-text-light">Framework</p>
            <p className="text-neutral-500">{aboutData.framework}</p>
          </div>
          <div className="flex items-center justify-between py-4 pr-6 text-lg border-b">
            <p className="text-text-light">Version</p>
            <p className="text-neutral-500">{aboutData.version}</p>
          </div>
          <div className="flex items-center justify-between py-4 pr-6 text-lg">
            <p className="text-text-light">Styling</p>
            <p className="text-neutral-500">{aboutData.styling}</p>
          </div>
        </div>
        <div className="w-full pl-6 bg-mobile-bg dark:bg-mobile-bar-dark rounded-xl">
          <Link href="/projects/mrnmnzl-com">
            <div className="flex items-center justify-between py-4 pr-6 text-lg">
              <p className="text-text-light">More Information</p>
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

export { AboutLayoutMobile };
