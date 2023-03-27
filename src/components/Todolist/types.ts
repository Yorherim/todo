import { Task } from "../Task/types";
import { TasksFilter, Todolist } from "../App";

export type TodolistPropsTypes = {
  todolist: Todolist;
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
