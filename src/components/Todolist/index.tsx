import { ChangeEvent, useState } from "react";

import styles from "./Todolist.module.scss";
import { TodolistPropsTypes } from "./types";
import { Task } from "../";

function Todolist({ todolistInfo, handlersState, tasks }: TodolistPropsTypes) {
  const [inputText, setInputText] = useState<string>("");

  const handlers = {
    changeInput: (e: ChangeEvent<HTMLInputElement>) => {
      setInputText(e.currentTarget.value);
    },
    addTask: () => {
      handlersState.addTask(todolistInfo.id, inputText);
      setInputText("");
    },
  };

  return (
    <div className={styles.todolist}>
      <h3 className={styles.title}>{todolistInfo.title}</h3>
      <div className={styles.top}>
        <input
          placeholder={"Write title task..."}
          className={styles.input}
          value={inputText}
          onChange={handlers.changeInput}
          type={"text"}
        />
        <button onClick={handlers.addTask} className={styles.addTaskButton}>
          +
        </button>
      </div>

      <ul className={styles.tasks}>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              taskInfo={task}
              todolistId={todolistInfo.id}
              toggleCompletedTask={handlersState.toggleCompletedTask}
            />
          </li>
        ))}
      </ul>

      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => handlersState.changeTasksFilter(todolistInfo.id, "all")}
        >
          All
        </button>
        <button
          className={styles.button}
          onClick={() => handlersState.changeTasksFilter(todolistInfo.id, "active")}
        >
          Active
        </button>
        <button
          className={styles.button}
          onClick={() => handlersState.changeTasksFilter(todolistInfo.id, "completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default Todolist;
