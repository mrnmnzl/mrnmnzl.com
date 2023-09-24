// https://github.com/Marc-Kruiss/next_js_13_sanity_v3_setup/blob/master/utils/fetchPosts.ts
import { groq } from "next-sanity";
import { client } from "../lib/client";

export const fetchAbout = async () => {
  const query = groq`
    *[_type=="about"][0]{
    _id,
    title,
    subtitle, 
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
    }
  }
`;

  const aboutData = await client.fetch(
    query,
    {},
    {
      next: { tags: ["sanity"] },
    }
  );
  return aboutData;
};
