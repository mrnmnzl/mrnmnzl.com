const cv = {
  name: "cv",
  title: "CV",
  description: "CV shema",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Page title",
    },
    {
      title: "PDF",
      name: "pdf",
      type: "file",
    },
  ],
};

export default cv;
