const project = {
  name: "codingExp",
  title: "Coding Experience",
  description: "Coding Experience Schema",
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
      title: "Things I am confident with",
      name: "expConfident",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Section Title" },
        {
          name: "technologies",
          title: "Technologies",
          type: "array",
          description: "List all technologies",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      title: "Just give me a day or two to revive my knowledge",
      name: "expFigureOut",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Section Title" },
        {
          name: "technologies",
          title: "Technologies",
          type: "array",
          description: "List all technologies",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      title: "Things I taught in university",
      name: "expTeach",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Section Title" },
        {
          name: "technologies",
          title: "Technologies",
          type: "array",
          description: "List all technologies",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      title: "Things I learned in university (and have not used since)",
      name: "expUniversity",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Section Title" },
        {
          name: "technologies",
          title: "Technologies",
          type: "array",
          description: "List all technologies",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      title: "I would really like to learn",
      name: "expLearn",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Section Title" },
        {
          name: "technologies",
          title: "Technologies",
          type: "array",
          description: "List all technologies",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
};

export default project;
