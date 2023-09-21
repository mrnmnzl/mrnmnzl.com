import { LuExternalLink, LuDownload } from "react-icons/lu";
import { Dots } from "@/components/Dots";
import { PDFRenderer } from "@/components/PDFRenderer";

async function CVPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="relative z-50 flex items-center justify-between w-full h-auto flex-0 bg-cv-bar dark:bg-cv-bar-dark">
        <div className="hidden sm:block">
          <Dots location={"/"} red activeDots={3} />
        </div>
        <div className="flex flex-col justify-center flex-1 h-full py-4 ml-8 sm:flex-0">
          <h1 className="m-0 -mt-1 font-bold">cv.pdf</h1>
          <p className="m-0 -mt-1 text-xs text-gray-400">2 pages</p>
        </div>
        <div className="flex items-center justify-end flex-1">
          <a href="/documents/cv.pdf" download="marion-menzl-cv.pdf">
            <LuDownload className="w-5 h-5 mr-6 text-blue-500" />
          </a>
          <a href="/documents/cv.pdf" target="_blank">
            <LuExternalLink className="w-5 h-5 mr-6 text-blue-500" />
          </a>
        </div>
      </div>
      <div className="flex-1 overflow-scroll">
        <PDFRenderer />
      </div>
    </div>
  );
}

export default CVPage;
