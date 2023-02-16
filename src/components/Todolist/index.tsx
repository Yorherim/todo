import { ChangeEvent, useState } from "react";

import styles from "./Todolist.module.scss";
import { TodolistPropsTypes } from "./types";

function Todolist({ todolistInfo, addTask, tasks }: TodolistPropsTypes) {
  const [inputText, setInputText] = useState<string>("");

  // console.log(tasks);

  const handlers = {
    changeInput: (e: ChangeEvent<HTMLInputElement>) => {
      setInputText(e.currentTarget.value)
    }
  }

  return (
    <div className={styles.todolist}>
      <h3 className={styles.title}>{todolistInfo.title}</h3>
      <div>
        <input
          placeholder={"Write title task..."}
          className={styles.input}
          value={inputText}
          onChange={e => handlers.changeInput(e)}
          type={"text"}
        />
        <button onClick={() => addTask(todolistInfo.id, inputText)}>+</button>
      </div>
      <ul>
        {/*<li>*/}
        {/*  <input type="checkbox" checked={true} /> <span>HTML&CSS</span>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <input type="checkbox" checked={true} /> <span>JS</span>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <input type="checkbox" checked={false} /> <span>React</span>*/}
        {/*</li>*/}
        {tasks.map(task => {
          return <li>
            <input type="checkbox" /> <span>{task.title}</span>
          </li>
        })}
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
