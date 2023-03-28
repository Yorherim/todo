import styles from "./Todolist.module.scss";
import { TodolistPropsTypes } from "./types";
import { ButtonTodolist, Task } from "../";
import { InputTextTodolist } from "../input-text";
import { TasksFilter } from "../app/types";

function Todolist({ todolist, handlersState, tasks }: TodolistPropsTypes) {
  const renders = {
    tasks: tasks.map((task) => (
      <li key={task.id}>
        <Task
          taskInfo={task}
          todolistId={todolist.id}
          toggleCompletedTask={handlersState.toggleCompletedTask}
          deleteTask={handlersState.deleteTask}
          changeTaskTitle={handlersState.changeTaskTitle}
        />
      </li>
    )),
    buttons: () => {
      const filters: TasksFilter[] = ["all", "active", "completed"];
      return filters.map((value: TasksFilter, i) => (
        <ButtonTodolist
          key={`${todolist.id}${i}`}
          todolist={todolist}
          value={value}
          changeTasksFilter={handlersState.changeTasksFilter}
        />
      ));
    },
  };

  return (
    <div className={styles.todolist}>
      <div className={styles.top}>
        <InputTextTodolist
          todolistId={todolist.id}
          addTask={handlersState.addTask}
          changeTodolistTitle={handlersState.changeTodolistTitle}
          title={todolist.title}
        />
      </div>

      <ul className={styles.tasks}>{renders.tasks}</ul>

      <div className={styles.buttons}>{renders.buttons()}</div>
    </div>
  );
}

export default Todolist;
