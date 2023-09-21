const experience = {
  name: "experience",
  title: "Experience",
  description: "Experience Schema",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Page title",
    },
    {
      name: "icon",
      title: "Emoji",
      type: "string",
      description: "Choose an emoji to represent this project",
      validation: (Rule) => Rule.max(3).warning(`Choose only one emoji.`),
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "array",
      description: "Write a short introduction for this page",
      of: [{ type: "block" }],
    },
    {
      name: "experience",
      title: "Experience",
      type: "array",
      description: "Write a short introduction for this page",
      of: [{ type: "block" }],
    },
  ],
};

export default experience;
