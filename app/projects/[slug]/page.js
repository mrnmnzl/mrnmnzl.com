import Image from "next/image";
import { fetchProject } from "@/sanity/utils/fetchProjects";
import { CustomPortableText } from "@/components/CustomPortableText";
import { ProjectsTopBar } from "@/components/ProjectsTopBar";
import { ImageGallery } from "@/components/ImageGallery";

function getImages(images) {
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
}

function getYear(date) {
  const parsedDate = new Date(date);
  return parsedDate.getFullYear();
}

const ProjectPage = async ({ params }) => {
  const project = await fetchProject(params.slug);

  return (
    <div className="flex flex-col h-full ">
      <ProjectsTopBar title={project.name} icon={project.icon} showBack />
      <div className="flex-1 pb-16 overflow-y-scroll">
        <Image
          src={project.coverImageUrl}
          alt={project.coverImageAlt}
          width={800}
          height={300}
          className="w-full min-h-[200px]  sm:min-h-[300px] object-cover"
        />
        <div className="flex justify-center flex-1 w-full">
          <div className="max-w-[800px] mx-8 pb-12">
            <p className="mb-12 -mt-8 text-6xl">{project.icon}</p>
            <h1 className="mb-4 text-4xl font-bold">
              {project.name}
              {project.date ? (
                <span className="ml-2 text-base">
                  ({getYear(project.date)})
                </span>
              ) : null}
            </h1>
            <p className="mb-4 text-lg italic text-neutral-500">
              {project.tagline}
            </p>
            <CustomPortableText data={project.description} />
            <div className="mt-4">
              <h2 className="mt-6 mb-2 text-xl font-bold">Technologies</h2>
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
                <h2 className="mt-6 mb-2 text-xl font-bold">Impressions</h2>
                <ImageGallery photos={getImages(project.images)} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
