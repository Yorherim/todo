import { useState } from "react";
import { nanoid } from "nanoid";

import styles from "./App.module.scss";
import { Todolist } from "../";
import { Task } from "../Todolist/types";

function App() {
  const [todolists, setTodolists] = useState([
    { id: "1", title: "What I need to learn" },
    { id: "2", title: "What I need to buy" },
  ]);
  const [allTasks, setAllTasks] = useState([
    {
      todolistId: "1",
      tasks: [
        { id: "1", title: "HTML&CSS" },
        { id: "2", title: "React" },
        { id: "3", title: "TypeScript" },
      ],
    },
    {
      todolistId: "2",
      tasks: [
        { id: "4", title: "milk" },
        { id: "5", title: "bread" },
      ],
    },
  ]);

  const handlers = {
    addTask: (todolistId: string, taskTitle: string) => {
      setAllTasks(
        allTasks.map((tasksGroup) => {
          if (tasksGroup.todolistId === todolistId) {
            tasksGroup.tasks.push({ id: nanoid(), title: taskTitle });
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
        return (
          <Todolist
            key={todolist.id}
            todolistInfo={todolist}
            addTask={handlers.addTask}
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
