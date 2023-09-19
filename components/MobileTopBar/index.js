import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

function MobileTopBar({ title, location = "/", buttonText = "Back" }) {
  return (
    <div className="flex items-center justify-between w-full py-6 flex-0">
      <Link
        href={location}
        className="inline-flex items-center w-1/4 px-2 py-2 text-lg text-blue-500"
      >
        <IoChevronBackOutline className="text-2xl" /> <span>{buttonText}</span>
      </Link>
      {title ? (
        <p className="w-1/2 text-lg font-semibold text-center">{title}</p>
      ) : null}

      <div className="w-1/4"></div>
    </div>
  );
}

export { MobileTopBar };
