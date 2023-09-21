import { fetchExperience } from "@/sanity/utils/fetchExperience";
import { fetchProjects } from "@/sanity/utils/fetchProjects";
import { ProjectsTopBar } from "@/components/ProjectsTopBar";
import { CustomPortableText } from "@/components/CustomPortableText";
import { ProjectsLinksList } from "@/components/ProjectsLinksList";

async function ProjectsPage() {
  const data = await fetchExperience();
  const projects = await fetchProjects();

  return (
    <div className="flex h-full sm:block">
      <div className="sm:hidden border-r-[1px] backdrop-blur border-window-border-light bg-projects-sidebar dark:bg-projects-sidebar-dark">
        <ProjectsLinksList
          projects={projects}
          title={data.title}
          icon={data.icon}
        />
      </div>
      <div className="flex flex-col h-full">
        <ProjectsTopBar title={data.title} icon={data.icon} />
        <div className="flex flex-col items-center flex-1 w-full pb-16 overflow-scroll">
          <div className="max-w-[800px] w-full px-8 pb-12 mt-28">
            <h1 className="mb-4 text-4xl font-bold">{data.title}</h1>
            <CustomPortableText data={data.introduction} />
            <CustomPortableText data={data.experience} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
