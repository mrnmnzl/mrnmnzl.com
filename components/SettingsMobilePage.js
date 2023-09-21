import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { cn } from "@/lib/utils";

function SettingsMobilePage({ data, className }) {
  return (
    <div
      className={cn("h-full bg-mobile-bar dark:bg-mobile-bg-dark", className)}
    >
      <div className="flex flex-col justify-between w-full pt-16 pl-4">
        <p className="m-0 mb-2 text-4xl font-bold">Settings</p>
        <div className="flex items-center px-2 py-1 mr-4 bg-white rounded-lg dark:bg-mobile-bar-dark dark:text-neutral-500">
          <IoSearchOutline className="w-5 h-5 mr-1" />
          <span>Search</span>
        </div>
      </div>
      <div className="flex flex-col p-4 pt-3">
        <div className="w-full pl-4 mb-8 bg-mobile-bg dark:bg-mobile-bar-dark rounded-xl">
          <Link href="/settings/user">
            <div className="flex items-center justify-between py-2 pr-6 text-lg">
              <div className="flex items-center">
                <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
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
                <div className="ml-3">
                  <p className="m-0 text-xl">Marion Menzl</p>
                  <p className="m-0 -mt-1 text-sm">Account</p>
                </div>
              </div>
              <p className="text-neutral-500">
                <IoIosArrowForward />
              </p>
            </div>
          </Link>
        </div>
        <div className="w-full pl-4 bg-mobile-bg dark:bg-mobile-bar-dark rounded-xl">
          <Link href="/settings/appearance">
            <div className="flex items-center justify-between py-2 pr-6 text-lg">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-6 h-6 mr-3 bg-blue-400 rounded">
                  <BsFillBrightnessHighFill className="text-lg text-white" />
                </div>
                <span>Display & Brightness</span>
              </div>
              <p className="text-neutral-500">
                <IoIosArrowForward />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { SettingsMobilePage };
