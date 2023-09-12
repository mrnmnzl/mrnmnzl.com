// https://github.com/Marc-Kruiss/next_js_13_sanity_v3_setup/blob/master/utils/fetchPosts.ts
import { groq } from "next-sanity";
import { client } from "../lib/client";

export const fetchCVTitle = async () => {
  const query = groq`
    *[_type=="cv"][0]{
    _id,
    title
    }
`;

  const title = await client.fetch(query);
  return title;
};

export const fetchCV = async () => {
  const query = groq`
    *[_type=="cv"][0]{
    _id,
    title,
    "pdfURL": pdf.asset->url
    }
`;

  const cvData = await client.fetch(query);
  return cvData;
};
