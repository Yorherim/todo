import { TaskPropsType } from "./types";

function Task({ taskInfo, todolistId, toggleCompletedTask }: TaskPropsType) {
  const handlers = {};

  return (
    <li>
      <input
        type="checkbox"
        checked={taskInfo.isCompleted}
        onChange={() => toggleCompletedTask(todolistId, taskInfo.id)}
      />
      <span>{taskInfo.title}</span>
    </li>
  );
}

export default Task;
