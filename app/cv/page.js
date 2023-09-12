import { Dots } from "@/components/Dots";
import { fetchCV } from "@/sanity/utils/fetchCV";
import PDFRenderer from "@/components/PDFRenderer";

async function CVPage() {
  const cvData = await fetchCV();

  return (
    <div className="flex flex-col h-full">
      <div className="relative z-50 flex items-center w-full h-auto flex-0 bg-cv-bar dark:bg-cv-bar-dark shadow-window-bar">
        <Dots location={"/"} red activeDots={3} />
        <div className="flex flex-col justify-center h-full ml-8">
          <h1 className="m-0 -mt-1 font-bold text-cv-text dark:text-cv-text-dark">
            cv.pdf
          </h1>
          <p className="m-0 -mt-1 text-xs">2 pages</p>
        </div>
      </div>
      <div className="flex-1 overflow-scroll">
        <PDFRenderer url={cvData.pdfURL} />
      </div>
    </div>
  );
}

export default CVPage;
