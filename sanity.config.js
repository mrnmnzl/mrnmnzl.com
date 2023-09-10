/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 * https://www.sanity.io/guides/singleton-document
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { BiCode } from "react-icons/bi";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas/index";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["codingExp"]);

const singletonListItem = (S, typeName, title) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title));

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Filter out actions that don't make sense for singletons
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singletons
            singletonListItem(S, "codingExp", "Coding Experience").icon(BiCode),
            // Regular documents
            S.documentTypeListItem("project").title("Coding Projects"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
