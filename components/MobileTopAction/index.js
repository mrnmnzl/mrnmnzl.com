import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

function MobileTopAction({ location = "/", title = "New" }) {
  return (
    <div className="flex items-center justify-end w-full py-4 flex-0">
      <Link
        href={location}
        className="inline-flex items-center justify-end w-full px-2 py-2 text-lg text-blue-500"
      >
        <span className="mr-1">{title}</span>
        <IoMdAdd className="mr-1 text-2xl" />
      </Link>
    </div>
  );
}

export { MobileTopAction };
