import Link from "next/link";
import { IoMdClose } from "react-icons/io";

function MobileCloseButton() {
  return (
    <div className="absolute w-12 h-12 bottom-7 right-7 sm:hidden">
      <Link href="/">
        <div className="flex items-center justify-center w-full h-full rounded-full bg-opacity-60 bg-neutral-400">
          <IoMdClose className="text-3xl text-opacity-60" />
        </div>
      </Link>
    </div>
  );
}

export { MobileCloseButton };
