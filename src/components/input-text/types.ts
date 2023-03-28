import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type DivDetailedHTMLProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type InputTextPropsType = DivDetailedHTMLProps & {
  children: ReactNode;
  addNewEntity: (value: string) => void;
};

export type InputTextTodolistPropsType = {
  todolistId: string;
  addTask: (todolistId: string, taskTitle: string) => void;
  changeTodolistTitle: (todolistId: string, title: string) => void;
  title: string;
};

export type InputTextTodolistCreatorPropsType = {
  addNewTodolist: (title: string) => void;
};
