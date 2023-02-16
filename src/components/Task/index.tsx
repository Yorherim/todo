import { TaskPropsType } from "./types";
import styles from "./Task.module.scss";

function Task({ taskInfo, todolistId, toggleCompletedTask, deleteTask }: TaskPropsType) {
  const handlers = {};

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        checked={taskInfo.isCompleted}
        onChange={() => toggleCompletedTask(todolistId, taskInfo.id)}
        className={styles.checkbox}
      />
      <span className={styles.title}>{taskInfo.title}</span>
      <button className={styles.button} onClick={() => deleteTask(todolistId, taskInfo.id)}>
        x
      </button>
    </div>
  );
}

export default Task;
