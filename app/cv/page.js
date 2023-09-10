"use client";

import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { Dots } from "@/components/dots";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Homepage() {
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function renderLoader() {
    return (
      <div className="flex items-center justify-center w-full h-[500px]">
        <p className="text text-cv-text">Loading...</p>
      </div>
    );
  }

  function renderPages() {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <Page
          key={i}
          pageNumber={i}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          className="[&>canvas]:!w-full [&>canvas]:!h-full mb-6 shadow-cv"
        />
      );
    }
    return pages;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="relative z-50 flex items-center w-full h-auto flex-0 bg-cv-bar dark:bg-cv-bar-dark shadow-window-bar">
        <Dots location={"/"} red activeDots={3} />
        <div className="flex flex-col justify-center h-full ml-8">
          <h1 className="m-0 -mt-1 font-bold text-cv-text dark:text-cv-text-dark">
            cv.pdf
          </h1>
          <p className="m-0 -mt-1 text-xs">{numPages} pages</p>
        </div>
      </div>
      <div className="flex-1 overflow-scroll">
        <Document
          file="./documents/cv.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="w-[800px] h-full"
          loading={renderLoader()}
        >
          {renderPages()}
        </Document>
      </div>
    </div>
  );
}

export default Homepage;
