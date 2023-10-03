import { fetchGeneral } from "@/sanity/utils/fetchGeneral";
import { MobileTopBar } from "@/components/MobileTopBar";
import Image from "next/image";
import { cn } from "@/lib/utils";

async function SettingsAppearancePage() {
  const data = await fetchGeneral();

  return (
    <div className="flex flex-col h-full sm:hidden bg-mobile-bar dark:bg-mobile-bg-dark">
      <MobileTopBar
        title="Account"
        location="/settings"
        buttonText="Settings"
      />
      <div className="flex flex-col px-4">
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="h-[100px] w-[100px] rounded-full overflow-hidden mb-2">
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
          <h1 className="-mb-1 text-xl font-bold">{data.name}</h1>
          <p className="mb-5 text-text-light dark:text-neutral-500">
            marion.menzl@me.com
          </p>
          <div className="flex flex-col w-full p-4 pt-6">
            <div className="w-full pl-4 mb-8 text-lg bg-mobile-bg dark:bg-mobile-bar-dark rounded-xl">
              {data.characteristics.map((characteristic, index) => (
                <div className="flex items-center" key={index}>
                  <span className="mr-4 text-2xl">{characteristic.emoji}</span>
                  <p
                    className={cn("w-full py-2 dark:border-neutral-700", {
                      "border-b": index !== data.characteristics.length - 1,
                    })}
                  >
                    {characteristic.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsAppearancePage;
