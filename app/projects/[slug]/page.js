import Image from "next/image";
import Link from "next/link";
import { fetchProject } from "@/sanity/utils/fetchProjects";
import { CustomPortableText } from "@/components/CustomPortableText";
import { ProjectsTopBar } from "@/components/ProjectsTopBar";
import { ImageGallery } from "@/components/ImageGallery";
import { IoLinkOutline, IoLogoGithub } from "react-icons/io5";

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
          src={project.coverImage.asset.url}
          alt={project.coverImage.alt}
          width={project.coverImage.asset.metadata.dimensions.width}
          height={project.coverImage.asset.metadata.dimensions.height}
          blurDataURL={project.coverImage.asset.metadata.lqip}
          placeholder="blur"
          className="w-full min-h-[200px] sm:min-h-[300px] sm:max-h-[400px] object-cover"
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
            {project.projectUrl ? (
              <div className="inline-block px-3 py-1 mt-6 mr-4 rounded bg-neutral-300">
                <Link
                  href={project.projectUrl}
                  className="flex items-center text-lg dark:text-text-light"
                >
                  <IoLinkOutline className="mr-1 text-2xl" />
                  Project Link
                </Link>
              </div>
            ) : null}
            {project.repositoryUrl ? (
              <div className="inline-block px-3 py-1 mt-6 rounded bg-neutral-300">
                <Link
                  href={project.repositoryUrl}
                  className="flex items-center text-lg dark:text-text-light"
                >
                  <IoLogoGithub className="mr-1 text-2xl" />
                  Repository Link
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
