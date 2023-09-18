import Link from "next/link";
import { MailListItem } from "./MailListItem";
import { BsPencilSquare } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { MobileTopBar } from "../MobileTopBar";

function MailLayoutMobile({ mailData }) {
  return (
    <main className="sm:hidden absolute z-[1001] flex flex-col w-full h-screen overflow-hidden origin-center -translate-x-1/2 -translate-y-1/2 shadow-window dark:bg-mobile-bg-dark bg-mobile-bg top-1/2 left-1/2">
      <MobileTopBar />
      <div className="flex flex-col justify-between w-full pl-6">
        <p className="m-0 mb-2 ml-2 text-4xl font-bold">Inbox</p>
        <div className="flex items-center px-2 py-1 mr-6 rounded-lg bg-mobile-bar dark:bg-mobile-bar-dark dark:text-neutral-500">
          <IoSearchOutline className="w-5 h-5 mr-1" />
          <span>Search</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 my-2">
        <div className="w-full h-full pl-6 pr-2 border-r border-r-mail-border dark:border-r-black">
          {mailData.map((email) => (
            <MailListItem
              subject={email.subject}
              adress={email.address}
              date={email.date}
              text={email.text}
            />
          ))}
        </div>
      </div>
      <div className="flex items-start justify-end h-24 p-4 flex-0 bg-mobile-bar dark:bg-mobile-bar-dark">
        <Link
          className="flex items-center text-xl text-blue-500"
          href="mailto:marion.menzl@me.com"
        >
          <span className="mr-2">Contact Me</span> <BsPencilSquare />
        </Link>
      </div>
    </main>
  );
}

export { MailLayoutMobile };
