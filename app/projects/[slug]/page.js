import { PortableText } from "@portabletext/react";
import { fetchProject } from "@/sanity/utils/fetchProjects";

export default async function Page({ params }) {
  const project = await fetchProject(params.slug);

  const components = {
    block: {
      h2: ({ children }) => (
        <h1 className="mt-4 text-xl font-bold">{children}</h1>
      ),
    },
  };

  function getYear(date) {
    const parsedDate = new Date(date);
    return parsedDate.getFullYear();
  }

  return (
    <div className="flex flex-col h-full overflow-y-scroll">
      <p className="flex-none py-2 pl-4">
        {project.icon} {project.name}
      </p>
      <img
        className="flex-none object-cover w-full h-auto"
        src={project.coverImageUrl}
        alt={project.coverImageAlt}
      ></img>

      <div className="flex justify-center flex-1 w-full">
        <div className="max-w-[800px] mx-8 pb-12">
          <p className="mb-12 -mt-8 text-6xl">{project.icon}</p>
          <h1 className="mb-4 text-4xl font-bold">
            {project.name}{" "}
            <span className="text-base">({getYear(project.date)})</span>
          </h1>
          <p>{project.tagline}</p>
          <PortableText value={project.description} components={components} />
          <div className="mt-4">
            <h2 className="mb-2 text-xl font-bold">Technologies</h2>
            {project.technologies?.map((technology, i) => (
              <span
                key={i}
                className="inline-block px-2 py-1 mb-2 mr-2 text-black rounded bg-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
