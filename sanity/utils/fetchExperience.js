// https://github.com/Marc-Kruiss/next_js_13_sanity_v3_setup/blob/master/utils/fetchPosts.ts
import { groq } from "next-sanity";
import { client } from "../lib/client";

export const fetchExperienceTitle = async () => {
  const query = groq`
    *[_type=="experience"][0]{
    _id,
    title,
    icon
    }
`;

  const title = await client.fetch(query);
  return title;
};

export const fetchExperience = async () => {
  const query = groq`
    *[_type=="experience"][0]{
    _id,
    title,
    icon,
    introduction,
    experience
    }
`;

  const experience = await client.fetch(query);
  return experience;
};
