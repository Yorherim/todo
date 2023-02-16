import { ChangeEvent, useState } from "react";

import styles from "./Todolist.module.scss";
import { TodolistPropsTypes } from "./types";

function Todolist({ todolistInfo, addTask, tasks }: TodolistPropsTypes) {
  const [inputText, setInputText] = useState<string>("");

  const handlers = {
    changeInput: (e: ChangeEvent<HTMLInputElement>) => {
      setInputText(e.currentTarget.value);
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
          onChange={(e) => handlers.changeInput(e)}
          type={"text"}
        />
        <button onClick={() => addTask(todolistInfo.id, inputText)}>+</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li>
            <input type="checkbox" /> <span>{task.title}</span>
          </li>
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
