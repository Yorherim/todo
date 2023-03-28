import React, { ChangeEvent, FC } from "react";

import { ProjectsSelectMenuProps } from "./types";

export const ProjectsSelectMenu: FC<ProjectsSelectMenuProps> = ({ projects, selectProject }) => {
  const handlers = {
    selectOption: (e: ChangeEvent<HTMLSelectElement>) => {
      const select = e.target;
      const projectId = select.children[select.selectedIndex].id;
      selectProject(projectId);
    },
  };

  return (
    <select defaultValue={projects[0].title} onChange={handlers.selectOption}>
      {projects.map((project) => {
        return (
          <option key={project.id} id={project.id}>
            {project.title}
          </option>
        );
      })}
    </select>
  );
};
