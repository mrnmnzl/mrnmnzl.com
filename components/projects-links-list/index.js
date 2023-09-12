"use client";

import React from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const ProjectsLinksList = ({ projects, title, icon }) => {
  const pathname = usePathname();
  const activePath = pathname.substring(pathname.lastIndexOf("/") + 1);

  const renderProjectLinks = (projects) => {
    return projects.map((project, i) => {
      const active = project.slug.current === activePath;
      const activeLinkClasses = clsx(
        "rounded-sm mx-[2px] px-4 py-[2px]  overflow-ellipsis whitespace-nowrap overflow-hidden",
        active
          ? "bg-projects-link dark:bg-projects-link-dark font-semibold "
          : null
      );
      return (
        <div key={i} className={activeLinkClasses}>
          <a
            href={"/projects/" + project.slug.current}
            className=" text-projects-text dark:text-projects-text-dark"
          >
            <span className="mr-2">{project.icon}</span>
            {project.name}
          </a>
        </div>
      );
    });
  };

  const renderHomepageLink = () => {
    const active = activePath === "projects";
    const activeLinkClasses = clsx(
      "rounded-sm px-4 py-[5px] mb-4 overflow-ellipsis whitespace-nowrap overflow-hidden",
      active
        ? "bg-projects-link dark:bg-projects-link-dark font-semibold "
        : null
    );
    return (
      <div className={activeLinkClasses}>
        <a
          href={"/projects/"}
          className=" text-projects-text dark:text-projects-text-dark"
        >
          <span className="mr-2">{icon}</span>
          {title}
        </a>
      </div>
    );
  };

  return (
    <nav>
      {renderHomepageLink()}
      <h2 className="px-4 text-sm font-bold text-projects-title dark:text-projects-title-dark">
        Projects
      </h2>
      {renderProjectLinks(projects)}
    </nav>
  );
};

export { ProjectsLinksList };
