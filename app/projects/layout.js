import { Dots } from "@/components/dots";
import { fetchProjects } from "@/sanity/utils/fetchProjects";
import { ProjectsLinksList } from "@/components/projects-links-list";
import { fetchCodingExpTitle } from "@/sanity/utils/fetchCodingExp";

export default async function Layout({ children }) {
  const projects = await fetchProjects();
  const exp = await fetchCodingExpTitle();

  return (
    <main className="projects-page">
      <div className="min-w-[150px] w-[20%] max-w-[400px] border-r-[1px] backdrop-blur border-window-border-light bg-projects-sidebar dark:bg-projects-sidebar-dark">
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
    </main>
  );
}
