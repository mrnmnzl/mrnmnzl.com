import { MailListItem } from "./MailListItem";
import { IoSearchOutline } from "react-icons/io5";
import { MobileTopAction } from "./MobileTopAction";
import { MobileCloseButton } from "./MobileCloseButton";
import { cn } from "@/lib/utils";

function MailMobileLayout({ data, className }) {
  return (
    <main
      className={cn(
        "absolute z-[1001] flex-col w-full h-full overflow-hidden origin-center -translate-x-1/2 -translate-y-1/2 shadow-window dark:bg-mobile-bg-dark bg-mobile-bg top-1/2 left-1/2",
        className
      )}
    >
      <MobileTopAction location="mailto:marion.menzl@me.com" title="Write Me" />
      <div className="flex flex-col justify-between w-full pt-8 pl-6">
        <p className="m-0 mb-2 text-4xl font-bold">Inbox</p>
        <div className="flex items-center px-2 py-1 mr-6 rounded-lg bg-mobile-bar dark:bg-mobile-bar-dark text-neutral-400 dark:text-neutral-500">
          <IoSearchOutline className="w-5 h-5 mr-1" />
          <span>Search</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 my-2">
        <div className="w-full h-full pl-6 border-r border-r-mail-border dark:border-r-black">
          {data.map((email) => (
            <MailListItem
              subject={email.subject}
              adress={email.address}
              date={email.date}
              text={email.text}
            />
          ))}
        </div>
      </div>
      <MobileCloseButton />
    </main>
  );
}

export { MailMobileLayout };
