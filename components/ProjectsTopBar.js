import Link from "next/link";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

function ProjectsTopBar({ title, icon, showBack = false }) {
  return (
    <p className="flex items-center py-2 pl-4 flex-0">
      {showBack ? (
        <Link href="/projects" className="block mr-2 sm:hidden">
          <IoChevronBackOutline className="text-xl" />
        </Link>
      ) : null}
      <span className="mr-2">{icon}</span>
      {title}
    </p>
  );
}

export { ProjectsTopBar };
