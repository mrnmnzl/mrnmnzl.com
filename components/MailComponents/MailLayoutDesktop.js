"use client";
import Link from "next/link";
import { Dots } from "@/components/Dots";
import { MailListItem } from "./MailListItem";
import { useStyleStore } from "@/stores/styleStore";
import { cn } from "@/lib/utils";
import clsx from "clsx";

function MailLayoutDesktop({ children, data, className }) {
  const selectedColor = useStyleStore((state) => state.selectedColor);
  const buttonClasses = clsx(
    "flex px-2 py-1 mr-4 rounded text-neutral-400",
    selectedColor.dark
      ? "text-text-dark" + " " + selectedColor.dark
      : "text-text-light dark:text-text-dark"
  );

  return (
    <main
      className={cn(
        "absolute z-[1001] flex-col overflow-hidden origin-center -translate-x-1/2 -translate-y-1/2 h-3/4 top-1/2 left-1/2 rounded-xl max-w-[800px] w-full",
        className
      )}
    >
      <div className="shadow-window bg-mail-bg dark:bg-mail-bg-dark">
        <div className="flex items-center justify-between w-full flex-0 bg-mail-bar dark:bg-mail-bar-dark shadow-window-bar">
          <div className="flex items-center justify-center">
            <Dots location={"/"} red activeDots={3} />
            <div>
              <p className="ml-4 text-sm font-bold">Inbox - mrnmnzl.com</p>
              <p className="ml-4 text-xs text-neutral-400">5 messages</p>
            </div>
          </div>
          <Link className={buttonClasses} href="mailto:marion.menzl@me.com">
            Write Me An Mail
          </Link>
        </div>
        <div className="flex flex-row flex-1 my-2">
          <div className="w-64 h-full pl-4 pr-2 border-r border-r-mail-border dark:border-r-black ">
            {data.map((email) => (
              <MailListItem
                subject={email.subject}
                adress={email.address}
                date={email.date}
                text={email.text}
              />
            ))}
          </div>
          <div className="flex items-center justify-center flex-1 w-full h-full">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

export { MailLayoutDesktop };
