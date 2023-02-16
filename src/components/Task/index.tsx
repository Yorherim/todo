import { TaskPropsType } from "./types";
import styles from "./Task.module.scss";

function Task({ taskInfo, todolistId, toggleCompletedTask }: TaskPropsType) {
  const handlers = {};

  return (
    <>
      <input
        type="checkbox"
        checked={taskInfo.isCompleted}
        onChange={() => toggleCompletedTask(todolistId, taskInfo.id)}
        className={styles.task}
      />
      <span>{taskInfo.title}</span>
    </>
  );
}

export default Task;
