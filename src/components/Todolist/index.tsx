import { ChangeEvent, useState } from "react";

import styles from "./Todolist.module.scss";
import { TodolistPropsTypes } from "./types";
import { Task } from "../";
import { InputTextTodolist } from "../Input-text";

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
      {/*<h3 className={styles.title}>{todolistInfo.title}</h3>*/}
      <div className={styles.top}>
        <InputTextTodolist
          todolistId={todolistInfo.id}
          addTask={handlersState.addTask}
          changeTodolistTitle={handlersState.changeTodolistTitle}
          title={todolistInfo.title}
        />
      </div>

      <ul className={styles.tasks}>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              taskInfo={task}
              todolistId={todolistInfo.id}
              toggleCompletedTask={handlersState.toggleCompletedTask}
              deleteTask={handlersState.deleteTask}
              changeTaskTitle={handlersState.changeTaskTitle}
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
