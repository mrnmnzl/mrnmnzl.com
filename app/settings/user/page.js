import { fetchGeneral } from "@/sanity/utils/fetchGeneral";
import { MobileTopBar } from "@/components/MobileTopBar";
import Image from "next/image";

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
          <h1 className="-mb-1 text-xl font-bold">Marion Menzl</h1>
          <p className="mb-5 text-text-light dark:text-neutral-500">
            marion.menzl@me.com
          </p>
          <div className="flex flex-col w-full p-4 pt-6">
            <div className="w-full pl-4 mb-8 text-lg bg-mobile-bg dark:bg-mobile-bar-dark rounded-xl">
              <div className="flex items-center">
                <span className="mr-4 text-2xl">👩‍💻</span>
                <p className="w-full py-2 border-b dark:border-neutral-700">
                  Frontend dev
                </p>
              </div>
              <div className="flex items-center">
                <span className="mr-4 text-2xl">👩‍🏫</span>
                <p className="w-full py-2 border-b dark:border-neutral-700">
                  Former uni lecturer
                </p>
              </div>
              <div className="flex items-center">
                <span className="mr-4 text-2xl">👩‍💼</span>
                <p className="w-full py-2 border-b dark:border-neutral-700">
                  Former small business owner
                </p>
              </div>
              <div className="flex items-center">
                <span className="mr-4 text-2xl">🐺</span>
                <p className="w-full py-2 border-b dark:border-neutral-700">
                  Dog mum
                </p>
              </div>
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📚</span>
                <p className="py-2 ">Book addict</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsAppearancePage;
