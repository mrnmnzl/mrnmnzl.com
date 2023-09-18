import { Dots } from "@/components/Dots";
import { fetchCV } from "@/sanity/utils/fetchCV";
import { PDFRenderer } from "@/components/PDFRenderer";
import { LuExternalLink, LuDownload } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

async function CVPage() {
  const cvData = await fetchCV();

  return (
    <div className="flex flex-col h-full">
      <div className="relative z-50 flex items-center w-full h-auto flex-0 bg-cv-bar dark:bg-cv-bar-dark shadow-window-bar">
        <div className="hidden sm:block">
          <Dots location={"/"} red activeDots={3} />
        </div>
        <div className="pl-6 sm:hidden">
          <Link
            href="/"
            className="inline-flex items-center text-xl text-blue-500"
          >
            <IoIosArrowBack className="mr-2" /> <span>Back</span>
          </Link>
        </div>
        <div className="flex flex-col justify-center h-full py-4 ml-8">
          <h1 className="m-0 -mt-1 font-bold text-cv-text dark:text-cv-text-dark">
            cv.pdf
          </h1>
          <p className="m-0 -mt-1 text-xs text-gray-400">2 pages</p>
        </div>
        <div className="flex items-center justify-end flex-1">
          <a href="/documents/cv.pdf" download="marion-menzl-cv.pdf">
            <LuDownload className="w-5 h-5 mr-6 text-text-light dark:text-text-dark" />
          </a>
          <a href="/documents/cv.pdf" target="_blank">
            <LuExternalLink className="w-5 h-5 mr-6 text-text-light dark:text-text-dark" />
          </a>
        </div>
      </div>
      <div className="flex-1 overflow-scroll">
        <PDFRenderer url={cvData.pdfURL} />
      </div>
    </div>
  );
}

export default CVPage;
