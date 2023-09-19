import { fetchAbout } from "@/sanity/utils/fetchAbout";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

async function SettingsPage() {
  const aboutData = await fetchAbout();
  return (
    <>
      <div className="hidden py-3 sm:block">
        <h1 className="mb-4 ml-3 font-semibold text-text-light">
          Marion Menzl
        </h1>
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="h-[100px] w-[100px] rounded-full overflow-hidden mb-2">
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
          <h1 className="-mb-1 text-xl font-bold">Marion Menzl</h1>
          <p className="mb-5 text-text-light">marion.menzl@me.com</p>
          <div className="w-full">
            <div className="border rounded bg-neutral-200 border-window-border-light">
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
      <div className="h-full sm:hidden bg-mobile-bar dark:bg-mobile-bg-dark">
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
                      src={aboutData.portrait.asset.url}
                      alt="Portrait of Marion"
                      placeholder="blur"
                      blurDataURL={aboutData.portrait.asset.metadata.lqip}
                      layout="responsive"
                      width={aboutData.portrait.asset.metadata.dimensions.width}
                      height={
                        aboutData.portrait.asset.metadata.dimensions.height
                      }
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
                <p>
                  <span className="mr-3 text-xl">🔠</span>Display & Brightness
                </p>
                <p className="text-neutral-500">
                  <IoIosArrowForward />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsPage;
