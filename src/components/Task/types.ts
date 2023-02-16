export type Task = { id: string; title: string; isCompleted: boolean };

export type TaskPropsType = {
  taskInfo: Task;
  todolistId: string;
  toggleCompletedTask: (todolistId: string, taskId: string) => void;
  deleteTask: (todolistId: string, taskId: string) => void;
};
