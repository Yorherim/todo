import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

import styles from "./Text-input.module.scss";
import { TextInputPropsType } from "./types";

function TextInput({ title, className, changeTaskTitle, taskId, todolistId }: TextInputPropsType) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(title);
  const [errorEmptyValue, setErrorEmptyValue] = useState<boolean>(false);

  const handlers = {
    activeEditMode: () => {
      setEditMode(true);
    },
    changeValue: (e: ChangeEvent<HTMLInputElement>) => {
      setErrorEmptyValue(false);
      setValue(e.currentTarget.value);
    },
    closeInput: useCallback(() => {
      if (value.trim() === "") {
        setErrorEmptyValue(true);
      } else {
        changeTaskTitle(todolistId, taskId, value);
        setErrorEmptyValue(false);
        setEditMode(false);
      }
    }, [value]),
  };

  return editMode ? (
    <div className={styles.inputBox}>
      <input
        type="text"
        className={clsx(styles.input, errorEmptyValue && styles.error)}
        value={value}
        onChange={handlers.changeValue}
        onBlur={() => handlers.closeInput()}
        autoFocus
      />
      {errorEmptyValue && <p className={styles.errorText}>Title can't be empty</p>}
    </div>
  ) : (
    <span className={clsx(styles.span, className)} onDoubleClick={handlers.activeEditMode}>
      {value}
    </span>
  );
}

export default TextInput;
