import styles from "./InputText.module.scss";
import InputText from "./Input-text";
import { InputTextTodolistCreatorPropsType } from "./types";

function InputTextTodolist({ addNewTodolist }: InputTextTodolistCreatorPropsType) {
  const handlers = {
    addNewEntity: (value: string) => {
      addNewTodolist(value);
    },
  };

  return (
    <InputText addNewEntity={handlers.addNewEntity}>
      <div className={styles.todolist_creator_title}>Create new todolist</div>
    </InputText>
  );
}

export default InputTextTodolist;
