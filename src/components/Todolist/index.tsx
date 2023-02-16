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
      <div>
        <input
          placeholder={"Write title task..."}
          className={styles.input}
          value={inputText}
          onChange={handlers.changeInput}
          type={"text"}
        />
        <button onClick={handlers.addTask}>+</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            taskInfo={task}
            todolistId={todolistInfo.id}
            toggleCompletedTask={handlersState.toggleCompletedTask}
          />
        ))}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default Todolist;
