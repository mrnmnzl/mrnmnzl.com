import React from "react";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
import { MenuBar } from "../MenuBar";
import { fetchAbout } from "@/sanity/utils/fetchAbout";
import { cn } from "@/lib/utils";

async function LockScreenDesktop({ className }) {
  const data = await fetchAbout();

  return (
    <div
      className={cn(
        "absolute flex-col w-full h-full top-0 z-[1001]",
        className
      )}
    >
      <div
        className={cn(
          "absolute w-full h-full top-0 bg-[url('/images/background.jpeg')] bg-cover bg-[center_bottom] "
        )}
      ></div>
      <MenuBar minimal />
      <div className="flex flex-col items-center justify-center flex-1 w-full text-white">
        <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden">
          <Image
            src={data.portrait.asset.url}
            alt="Portrait of Marion"
            placeholder="blur"
            blurDataURL={data.portrait.asset.metadata.lqip}
            width={data.portrait.asset.metadata.dimensions.width}
            height={data.portrait.asset.metadata.dimensions.height}
          />
        </div>
        <h1 className="my-6 text-xl font-bold drop-shadow-md">mrnmnzl.com</h1>
        <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
        <p className="my-6 text-xs font-bold drop-shadow-md">
          Touch ID or enter password
        </p>
      </div>
      <div className="absolute flex flex-col items-center w-full bottom-10">
        <div className="flex items-center justify-center h-9 w-9 bg-[rgba(255,255,255,0.3)] rounded-full">
          <CgCloseO className="h-[70%] w-[70%]" />
        </div>
        <p className="mt-2 text-xs font-bold">Cancel</p>
      </div>
    </div>
  );
}

export { LockScreenDesktop };
