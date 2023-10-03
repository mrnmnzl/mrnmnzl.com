// https://github.com/Marc-Kruiss/next_js_13_sanity_v3_setup/blob/master/utils/fetchPosts.ts
import { groq } from "next-sanity";
import { client } from "../lib/client";

export const fetchGeneral = async () => {
  const query = groq`
    *[_type=="about"][0]{
    _id,
    name,
    title,
    subtitle, 
    url,
    framework,
    version,
    styling,
    portrait {
      asset-> {
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip
        }
      },
      alt
    },
    characteristics[]
  }
`;

  const data = await client.fetch(query);
  return data;
};
