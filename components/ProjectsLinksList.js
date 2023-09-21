"use client";

import React from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

function ProjectsLinksList({ projects, title, icon }) {
  const pathname = usePathname();
  const activePath = pathname.substring(pathname.lastIndexOf("/") + 1);

  const sortProjectsByDate = (projects) => {
    return projects.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  };

  const renderProjectLinks = (projects) => {
    projects = sortProjectsByDate(projects);

    return projects.map((project, i) => {
      const active = project.slug.current === activePath;
      const activeLinkClasses = clsx(
        "sm:rounded-sm sm:mx-[2px] px-4 py-[5px] sm:py-[2px] overflow-ellipsis whitespace-nowrap overflow-hidden",
        active
          ? "bg-projects-link dark:bg-projects-link-dark font-semibold "
          : null
      );
      return (
        <div key={i} className={activeLinkClasses}>
          <Link
            href={"/projects/" + project.slug.current}
            className=" text-projects-text dark:text-projects-text-dark"
          >
            <span className="sm:mr-2">{project.icon}</span>
            <span className="hidden sm:inline">{project.name}</span>
          </Link>
        </div>
      );
    });
  };

  const renderHomepageLink = () => {
    const active = activePath === "projects";
    const activeLinkClasses = clsx(
      "sm:rounded-sm sm:px-4 sm:mx-[2px] py-[5px] sm:mb-4 overflow-ellipsis whitespace-nowrap overflow-hidden h-12 sm:h-auto w-12 sm:w-auto flex-c-c sm:block",
      active
        ? "bg-projects-link dark:bg-projects-link-dark font-semibold "
        : null
    );
    return (
      <div className={activeLinkClasses}>
        <Link
          href={"/projects/"}
          className=" text-projects-text dark:text-projects-text-dark"
        >
          <span className="text-3xl sm:text-base sm:mr-2">{icon}</span>
          <span className="hidden sm:inline">{title}</span>
        </Link>
      </div>
    );
  };

  return (
    <nav className="sm:p-0">
      {renderHomepageLink()}
      <h2 className="hidden px-4 text-sm font-bold text-projects-title dark:text-projects-title-dark sm:block">
        Projects
      </h2>
      {renderProjectLinks(projects)}
    </nav>
  );
}

export { ProjectsLinksList };
