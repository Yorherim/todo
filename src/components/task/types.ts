export type Task = { id: string; title: string; isCompleted: boolean; todolistId: string };

export type TaskPropsType = {
  taskInfo: Task;
  todolistId: string;
  toggleCompletedTask: (todolistId: string, taskId: string) => void;
  deleteTask: (todolistId: string, taskId: string) => void;
  changeTaskTitle: (todolistId: string, taskId: string, title: string) => void;
};
