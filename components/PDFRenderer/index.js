"use client";

import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function PDFRenderer({ url }) {
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
    <Document
      file={url}
      onLoadSuccess={onDocumentLoadSuccess}
      className="w-[800px] h-full"
      loading={renderLoader()}
    >
      {renderPages()}
    </Document>
  );
}

export { PDFRenderer };
