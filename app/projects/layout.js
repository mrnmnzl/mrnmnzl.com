import Link from "next/link";
import { Dots } from "@/components/Dots";
import { fetchProjects } from "@/sanity/utils/fetchProjects";
import { ProjectsLinksList } from "@/components/ProjectLinksList";
import { fetchCodingExpTitle } from "@/sanity/utils/fetchCodingExp";

async function ProjectsLayout({ children }) {
  const projects = await fetchProjects();
  const exp = await fetchCodingExpTitle();

  return (
    <main className="h-screen rounded-none sm:h-full projects-page sm:rounded-xl absolute z-[1001]">
      <div className="sm:min-w-[150px] sm:w-[20%] sm:max-w-[400px] border-r-[1px] backdrop-blur border-window-border-light bg-projects-sidebar dark:bg-projects-sidebar-dark">
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
      <div className="absolute bottom-5 right-5 sm:hidden">
        <Link
          href="/"
          className="flex items-center justify-center w-12 h-12 bg-slate-500 rounded-3xl"
        >
          <span className="text-xl font-bold text-white">✕</span>
        </Link>
      </div>
    </main>
  );
}

export default ProjectsLayout;
