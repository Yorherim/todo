import { ChangeEvent, useState } from "react";
import clsx from "clsx";

import styles from "./Text-input.module.scss";
import { SpanInputPropsType } from "./types";

function SpanInput({ title, className, changeTitle, ...props }: SpanInputPropsType) {
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
    closeInput: () => {
      if (value.trim() === "") {
        setErrorEmptyValue(true);
      } else {
        changeTitle(value);
        setErrorEmptyValue(false);
        setEditMode(false);
      }
    },
  };

  return editMode ? (
    <div className={styles.inputBox}>
      <input
        type="text"
        className={clsx(styles.input, errorEmptyValue && styles.error)}
        value={value}
        onChange={handlers.changeValue}
        onBlur={handlers.closeInput}
        autoFocus
      />
      {errorEmptyValue && <p className={styles.errorText}>Title can't be empty</p>}
    </div>
  ) : (
    <span
      className={clsx(styles.span, className)}
      onDoubleClick={handlers.activeEditMode}
      {...props}
    >
      {value}
    </span>
  );
}

export default SpanInput;
