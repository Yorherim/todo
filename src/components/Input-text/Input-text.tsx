import { ChangeEvent, useState } from "react";

import styles from "./InputText.module.scss";
import { InputTextPropsType } from "./types";

function InputText({ children, addNewEntity, className, ...props }: InputTextPropsType) {
  const [value, setValue] = useState<string>("");

  const handlers = {
    changeValue: (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
    },
    addNew: () => {
      addNewEntity(value);
      setValue("");
    },
  };

  return (
    <div className={className} {...props}>
      {children}
      <input
        placeholder={"Write todolist title..."}
        className={styles.input}
        value={value}
        onChange={handlers.changeValue}
        type={"text"}
      />
      <button onClick={handlers.addNew} className={styles.addTaskButton}>
        +
      </button>
    </div>
  );
}

export default InputText;
