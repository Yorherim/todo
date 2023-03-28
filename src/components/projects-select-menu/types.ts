import { Project } from "../app/types";

export type ProjectsSelectMenuProps = {
  projects: Project[];
  selectProject: (projectId: string) => void;
};
