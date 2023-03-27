import React, { FC } from "react";
import clsx from "clsx";

import styles from "./button-todolist.module.scss";
import { ButtonTodolistProps } from "./types";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

export const ButtonTodolist: FC<ButtonTodolistProps> = ({
  todolist,
  value,
  changeTasksFilter,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        {
          [styles.button_notActive]: todolist.tasksFilter !== value,
        },
        className,
      )}
      onClick={() => changeTasksFilter(todolist.id, value)}
      {...props}
    >
      {capitalizeFirstLetter(value)}
    </button>
  );
};
