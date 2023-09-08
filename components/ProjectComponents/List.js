import React from "react";

const List = ({ technologies }) => {
  return (
    <ul className="pl-6 mb-4">
      {technologies.map((tech) => (
        <li className="list-disc" key={tech}>
          {tech}
        </li>
      ))}
    </ul>
  );
};

export { List };
