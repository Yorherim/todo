import { useState } from "react";
import { nanoid } from "nanoid";

import styles from "./App.module.scss";
import { Todolist } from "../";
import { Task } from "../Task/types";

export type todolistsState = { id: string; title: string; tasksFilter: TasksFilter }[];
export type tasksState = { todolistId: string; tasks: Task[] }[];
export type TasksFilter = "all" | "active" | "completed";

function App() {
  const [todolists, setTodolists] = useState<todolistsState>([
    { id: "1", title: "What I need to learn", tasksFilter: "all" },
    { id: "2", title: "What I need to buy", tasksFilter: "all" },
  ]);
  const [allTasks, setAllTasks] = useState<tasksState>([
    {
      todolistId: "1",
      tasks: [
        { id: "1", title: "HTML&CSS", isCompleted: true },
        { id: "2", title: "React", isCompleted: false },
        { id: "3", title: "TypeScript", isCompleted: false },
      ],
    },
    {
      todolistId: "2",
      tasks: [
        { id: "4", title: "milk", isCompleted: false },
        { id: "5", title: "bread", isCompleted: false },
      ],
    },
  ]);

  console.log(allTasks);

  const handlersState = {
    addTask: (todolistId: string, taskTitle: string) => {
      setAllTasks(
        allTasks.map((tasksGroup) => {
          if (tasksGroup.todolistId === todolistId) {
            return {
              ...tasksGroup,
              tasks: [...tasksGroup.tasks, { id: nanoid(), title: taskTitle, isCompleted: false }],
            };
          }
          return tasksGroup;
        }),
      );
    },
    toggleCompletedTask: (todolistId: string, taskId: string) => {
      setAllTasks(
        allTasks.map((tasksGroup) => {
          if (tasksGroup.todolistId === todolistId) {
            tasksGroup.tasks = tasksGroup.tasks.map((task) => {
              if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
              }
              return task;
            });
          }
          return tasksGroup;
        }),
      );
    },
    changeTasksFilter: (todolistId: string, filter: TasksFilter) => {
      setTodolists(
        todolists.map((todolist) => {
          if (todolist.id === todolistId) {
            return { ...todolist, tasksFilter: filter };
          }
          return todolist;
        }),
      );
    },
    deleteTask: (todolistId: string, taskId: string) => {
      setAllTasks(
        allTasks.map((tasksGroup) => {
          if (tasksGroup.todolistId === todolistId) {
            return {
              ...tasksGroup,
              tasks: tasksGroup.tasks.filter((task) => task.id !== taskId),
            };
          }
          return tasksGroup;
        }),
      );
    },
    changeTaskTitle: (todolistId: string, taskId: string, title: string) => {
      setAllTasks(
        allTasks.map((tasksGroup) => {
          if (tasksGroup.todolistId === todolistId) {
            return {
              ...tasksGroup,
              tasks: tasksGroup.tasks.map((task) => {
                if (task.id === taskId) task.title = title;
                return task;
              }),
            };
          }
          return tasksGroup;
        }),
      );
    },
  };

  const renders = {
    todolists: () =>
      todolists.map((todolist) => {
        let tasks = [] as Task[];
        for (let i = 0; i < allTasks.length; i++) {
          if (allTasks[i].todolistId === todolist.id) {
            tasks = allTasks[i].tasks;
            break;
          }
        }

        if (todolist.tasksFilter === "active") {
          tasks = tasks.filter((task) => !task.isCompleted);
        } else if (todolist.tasksFilter === "completed") {
          tasks = tasks.filter((task) => task.isCompleted);
        }

        return (
          <Todolist
            key={todolist.id}
            todolistInfo={todolist}
            handlersState={handlersState}
            tasks={tasks}
          />
        );
      }),
  };

  return (
    <main className={styles.app}>
      <div className="container">
        <div className={styles.todolists}>{renders.todolists()}</div>
      </div>
    </main>
  );
}

export default App;
