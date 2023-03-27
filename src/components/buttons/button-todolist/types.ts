import { ComponentProps } from "react";
import { TasksFilter, Todolist } from "../../App";

export type ButtonTodolistProps = ComponentProps<"button"> & {
  todolist: Todolist;
  value: TasksFilter;
  changeTasksFilter: (id: string, value: TasksFilter) => void;
};
