import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

function MobileTopBar({ title }) {
  return (
    <div className="flex items-center justify-between w-full py-6">
      <Link
        href="/"
        className="inline-flex items-center w-1/3 px-4 py-2 text-xl text-blue-500"
      >
        <IoIosArrowBack className="mr-2" /> <span>Back</span>
      </Link>
      {title ? (
        <p className="w-1/3 text-xl font-semibold text-center">{title}</p>
      ) : null}

      <div className="w-1/3"></div>
    </div>
  );
}

export { MobileTopBar };
