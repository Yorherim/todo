import styles from "./InputText.module.scss";
import InputText from "./Input-text";
import { InputTextTodolistPropsType } from "./types";
import { SpanInputTodolist } from "../Span-input";

function InputTextTodolist({
  todolistId,
  addTask,
  changeTodolistTitle,
  title,
}: InputTextTodolistPropsType) {
  const handlers = {
    addNewEntity: (value: string) => {
      addTask(todolistId, value);
    },
  };

  return (
    <InputText addNewEntity={handlers.addNewEntity}>
      <SpanInputTodolist
        todolistId={todolistId}
        changeTodolistTitle={changeTodolistTitle}
        title={title}
        className={styles.input_todolist}
      />
    </InputText>
  );
}

export default InputTextTodolist;
