const about = {
  name: "about",
  title: "About",
  description: "About page schema",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Page title",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Page subtitle",
    },
    {
      name: "framework",
      title: "Framework",
      type: "string",
      description: "Used framework",
    },
    {
      name: "version",
      title: "Version",
      type: "string",
      description: "Framework version",
    },
    {
      name: "styling",
      title: "Styling",
      type: "string",
      description: "Styling system",
    },
    {
      name: "portrait",
      title: "Portrait image",
      type: "image",
      description: "Upload a portrait image for about page",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
    {
      title: "Characteristics",
      type: "array",
      name: "Characteristics",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "emoji" },
            { type: "string", name: "title" },
          ],
        },
      ],
    },
  ],
};

export default about;
