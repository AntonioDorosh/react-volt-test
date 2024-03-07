import React, { FC } from "react";
import styles from "./TodoFooter.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../features/redux/hooks/useStore";
import {
  clearAllTodos,
  selectCompletedTodoCount,
  selectUnCompletedTodo,
} from "../../features/redux/reducers/todo/slice";

const TodoFooter: FC = () => {
  const dispatch = useAppDispatch();
  const completedCount = useAppSelector(selectCompletedTodoCount);
  const unCompletedCount = useAppSelector(selectUnCompletedTodo);

  return (
    <footer className={styles.footer}>
      <p className={styles.footer__count}>
        uncompleted tasks: {unCompletedCount}
      </p>
      <p className={styles.footer__count}>completed tasks: {completedCount}</p>
      <button
        className={styles.button}
        onClick={() => dispatch(clearAllTodos())}
      >
        clear all todos
      </button>
    </footer>
  );
};

export default TodoFooter;
