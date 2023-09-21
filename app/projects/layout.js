import { fetchProjects } from "@/sanity/utils/fetchProjects";
import { fetchExperienceTitle } from "@/sanity/utils/fetchExperience";
import { Dots } from "@/components/Dots";
import { ProjectsLinksList } from "@/components/ProjectsLinksList";
import { MobileCloseButton } from "@/components/MobileCloseButton";

async function ProjectsLayout({ children }) {
  const projects = await fetchProjects();
  const exp = await fetchExperienceTitle();

  return (
    <main className="h-full rounded-none sm:h-full projects-page sm:rounded-xl absolute z-[1001]">
      <div className="hidden sm:block sm:min-w-[150px] sm:w-[20%] sm:max-w-[400px] border-r-[1px] backdrop-blur border-window-border-light bg-projects-sidebar dark:bg-projects-sidebar-dark">
        <div>
          <div className="hidden sm:block">
            <Dots location={"/"} red yellow green activeDots={3} />
          </div>
          <ProjectsLinksList
            projects={projects}
            title={exp.title}
            icon={exp.icon}
          />
        </div>
      </div>
      <div className="w-full bg-projects-main dark:bg-projects-main-dark text-text-light dark:text-text-dark">
        {children}
      </div>
      <MobileCloseButton />
    </main>
  );
}

export default ProjectsLayout;
