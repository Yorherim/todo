import { Task } from "../Task/types";
import { TasksFilter } from "../App";

export type TodolistPropsTypes = {
  todolistInfo: {
    id: string;
    title: string;
  };
  tasks: Task[];
  handlersState: {
    changeTodolistTitle: (todolistId: string, title: string) => void;
    addTask: (todolistId: string, taskTitle: string) => void;
    toggleCompletedTask: (todolistId: string, taskId: string) => void;
    changeTasksFilter: (todolistId: string, filter: TasksFilter) => void;
    deleteTask: (todolistId: string, taskId: string) => void;
    changeTaskTitle: (todolistId: string, taskId: string, title: string) => void;
  };
};
