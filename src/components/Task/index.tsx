import { TaskPropsType } from "./types";
import styles from "./Task.module.scss";
import { SpanInputTask } from "../index";

function Task({
  taskInfo,
  todolistId,
  toggleCompletedTask,
  deleteTask,
  changeTaskTitle,
}: TaskPropsType) {
  const handlers = {};

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        checked={taskInfo.isCompleted}
        onChange={() => toggleCompletedTask(todolistId, taskInfo.id)}
        className={styles.checkbox}
      />
      <SpanInputTask
        title={taskInfo.title}
        className={styles.title}
        changeTaskTitle={changeTaskTitle}
        taskId={taskInfo.id}
        todolistId={todolistId}
      />
      <button className={styles.button} onClick={() => deleteTask(todolistId, taskInfo.id)}>
        x
      </button>
    </div>
  );
}

export default Task;
