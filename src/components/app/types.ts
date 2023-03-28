import { Task } from "../task/types";

export type Todolist = { id: string; title: string; tasksFilter: TasksFilter };

export type todolistsState = {
  projectId: string;
  todolists: Todolist[];
}[];

export type tasksState = { todolistId: string; tasks: Task[] }[];

export type TasksFilter = "all" | "active" | "completed";

export type Project = { id: string; title: string };

export type ProjectState = Project[];
