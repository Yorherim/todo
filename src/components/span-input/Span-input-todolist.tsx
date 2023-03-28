import SpanInput from "./Span-input";
import { SpanInputTodolistPropsType } from "./types";

function SpanInputTodolist({
  title,
  todolistId,
  className,
  changeTodolistTitle,
}: SpanInputTodolistPropsType) {
  const changeTitle = (newTitle: string) => {
    changeTodolistTitle(todolistId, newTitle);
  };

  return <SpanInput changeTitle={changeTitle} className={className} title={title} />;
}

export default SpanInputTodolist;
