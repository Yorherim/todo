import { Task } from "../task/types";

export type Todolist = { id: string; title: string; tasksFilter: TasksFilter; projectId: string };

export type todolistsState = Todolist[];

export type tasksState = Task[];

export type TasksFilter = "all" | "active" | "completed";

export type Project = { id: string; title: string };

export type ProjectState = Project[];
