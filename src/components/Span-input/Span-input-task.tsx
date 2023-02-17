import SpanInput from "./Span-input";
import { SpanInputTaskPropsType } from "./types";

function SpanInputTask({
  title,
  taskId,
  todolistId,
  className,
  changeTaskTitle,
}: SpanInputTaskPropsType) {
  const changeTitle = (newTitle: string) => {
    changeTaskTitle(todolistId, taskId, newTitle);
  };

  return <SpanInput changeTitle={changeTitle} className={className} title={title} />;
}

export default SpanInputTask;
