import { cn } from "@/lib/utils";
import Image from "next/image";

function SettingsDesktopPage({ data, className }) {
  return (
    <div className={cn(className)}>
      <h1 className="mt-4 mb-4 ml-2 font-semibold text-text-light dark:text-text-dark">
        Marion Menzl
      </h1>
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
        <p className="mb-5 text-text-light dark:text-text-dark">
          marion.menzl@me.com
        </p>
        <div className="w-full">
          <div className="rounded-xl bg-neutral-200 dark:bg-neutral-700 border-window-border-light">
            <div className="py-2 mx-2 border-b border-window-border-light">
              <p className="text-sm">
                <span className="mr-2 text-lg">👩‍💻</span>Frontend dev
              </p>
            </div>
            <div className="py-2 mx-2 border-b border-window-border-light">
              <p className="text-sm">
                <span className="mr-2 text-lg">👩‍🏫</span>Former uni lecturer
              </p>
            </div>
            <div className="py-2 mx-2 border-b border-window-border-light">
              <p className="text-sm">
                <span className="mr-2 text-lg">👩‍💼</span>Former small business
                owner
              </p>
            </div>
            <div className="py-2 mx-2 border-b border-window-border-light">
              <p className="text-sm">
                <span className="mr-2 text-lg">🐺</span>Dog mum
              </p>
            </div>{" "}
            <div className="py-2 mx-2">
              <p className="text-sm">
                <span className="mr-2 text-lg">📚</span>Book addict
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SettingsDesktopPage };
