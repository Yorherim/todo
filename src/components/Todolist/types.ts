import { Task } from "../Task/types";

export type TodolistPropsTypes = {
  todolistInfo: {
    id: string;
    title: string;
  };
  tasks: Task[];
  handlersState: {
    addTask: (todolistId: string, taskTitle: string) => void;
    toggleCompletedTask: (todolistId: string, taskId: string) => void
  }
};


