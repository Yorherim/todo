export type TextInputPropsType = {
  title: string;
  className: string;
  taskId: string;
  todolistId: string;
  changeTaskTitle: (todolistId: string, taskId: string, title: string) => void;
};
