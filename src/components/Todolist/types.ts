export type TodolistPropsTypes = {
  todolistInfo: {
    id: string;
    title: string;
  };
  addTask: (todolistId: string, taskTitle: string) => void;
  tasks: Task[];
};

export type Task = { id: string; title: string }
