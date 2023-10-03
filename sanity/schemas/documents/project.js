import { BsCodeSquare } from "react-icons/bs";
import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  icon: BsCodeSquare,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    },
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule) => rule.max(60).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "icon",
      title: "Emoji",
      type: "string",
      description: "Choose an emoji to represent this project",
      validation: (Rule) => Rule.max(3).warning(`Choose only one emoji.`),
    },
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "repositoryUrl",
      title: "Repository URL",
      type: "url",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
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
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this project",
      of: [{ type: "block" }],
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      description: "The date this project was completed",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      description: "Add the technologies used in this project",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          name: "impression",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
};

export default project;
