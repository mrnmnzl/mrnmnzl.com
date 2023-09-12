import { PortableText } from "@portabletext/react";
import { fetchProject } from "@/sanity/utils/fetchProjects";
import { Title } from "@/components/ProjectComponents/Title";
import { Subtitle } from "@/components/ProjectComponents/Subtitle";
import { TopBar } from "@/components/ProjectComponents/TopBar";
import Image from "next/image";
import { Gallery } from "@/components/ProjectImageGallery";

const Page = async ({ params }) => {
  const project = await fetchProject(params.slug);

  const components = {
    block: {
      h2: ({ children }) => <Subtitle>{children}</Subtitle>,
      normal: ({ children }) => <p className="mb-4">{children}</p>,
    },
  };

  const getImages = (images) => {
    const imageData = images.map((image) => {
      return {
        src: image.image.asset.url,
        width: image.image.asset.metadata.dimensions.width,
        height: image.image.asset.metadata.dimensions.height,
        alt: image.alt,
        blurDataURL: image.image.asset.metadata.lqip,
      };
    });
    return imageData;
  };

  return (
    <div className="flex flex-col h-full overflow-y-scroll">
      <TopBar title={project.name} icon={project.icon} />
      <Image
        src={project.coverImageUrl}
        alt={project.coverImageAlt}
        width={800}
        height={300}
        className="w-full min-h-[300px] object-cover"
      />
      <div className="flex justify-center flex-1 w-full">
        <div className="max-w-[800px] mx-8 pb-12">
          <p className="mb-12 -mt-8 text-6xl">{project.icon}</p>
          <Title title={project.name} date={project.date} />
          <p className="italic">{project.tagline}</p>
          <PortableText value={project.description} components={components} />
          <div className="mt-4">
            <Subtitle title="Technologies" />
            {project.technologies?.map((technology, i) => (
              <span
                key={i}
                className="inline-block px-2 py-1 mb-2 mr-2 text-black rounded bg-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
          {project.images?.length > 0 ? (
            <div className="mt-4">
              <Subtitle title="Impressions" />
              <Gallery photos={getImages(project.images)} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Page;
