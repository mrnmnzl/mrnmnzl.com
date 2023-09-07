import { Dots } from "@/components/dots";
import { fetchProjects } from "../../sanity/utils/fetchProjects";
import { ProjectsLinksList } from "@/components/projects-links-list";

export default async function Layout({ children }) {
  const projects = await fetchProjects();

  return (
    <main className="projects-page">
      <div className="w-[300px] border-r-[1px] backdrop-blur border-window-border-light bg-projects-sidebar dark:bg-projects-sidebar-dark">
        <div>
          <Dots location={"/"} red yellow green activeDots={3} />
          <ProjectsLinksList projects={projects} />
        </div>
      </div>
      <div className="w-full bg-projects-main dark:bg-projects-main-dark text-text-light dark:text-text-dark">
        {children}
      </div>
    </main>
  );
}
