// https://github.com/Marc-Kruiss/next_js_13_sanity_v3_setup/blob/master/utils/fetchPosts.ts
import { groq } from "next-sanity";
import { client } from "../lib/client";

export const query = groq`
*[_type=="project"]{
    _id,
      name,
      slug,
      icon,
      date
  }
`;

export const fetchProjects = async () => {
  const projects = await client.fetch(query);
  return projects;
};

export const fetchProject = async (querySlug) => {
  const query = groq`
    *[_type=="project" && slug.current == "${querySlug}"][0]{
    _id,
    name,
    tagline,
    slug,
    icon,
    projectUrl,
    repositoryUrl,
    coverImage {
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
    description,
    date,
    technologies,
    images[] {
      image {
        asset-> {
          url,
          metadata {
            dimensions {
              width,
              height
            },
            lqip
          }
        }
      },
      alt
    }
  }
`;

  const project = await client.fetch(query);
  return project;
};
