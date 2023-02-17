import { HTMLAttributes, DetailedHTMLProps } from "react";

type SpanDetailedHTMLProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type SpanInputPropsType = SpanDetailedHTMLProps & {
  title: string;
  changeTitle: (newTitle: string) => void;
};

export type SpanInputTaskPropsType = SpanDetailedHTMLProps & {
  taskId: string;
  todolistId: string;
  title: string;
  changeTaskTitle: (todolistId: string, taskId: string, title: string) => void;
};

export type SpanInputTodolistPropsType = SpanDetailedHTMLProps & {
  todolistId: string;
  title: string;
  changeTodolistTitle: (todolistId: string, title: string) => void;
};
