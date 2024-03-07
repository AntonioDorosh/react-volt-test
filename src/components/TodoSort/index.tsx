import React, { FC } from "react";
import styles from "./TodoSort.module.scss";

import { Action } from "@reduxjs/toolkit";
import { sortProperty, TSort } from "../../features/redux/reducers/filter/type";
import {
  useAppDispatch,
  useAppSelector,
} from "../../features/redux/hooks/useStore";
import {
  selectFilter,
  setSort,
} from "../../features/redux/reducers/filter/slice";
import { setCategory } from "../../features/redux/reducers/todo/slice";

const sortedTask: TSort[] = [
  { sortKey: "All", sortProperty: sortProperty.All },
  { sortKey: "Completed", sortProperty: sortProperty.Completed },
  { sortKey: "Active", sortProperty: sortProperty.Active },
];

const Sort: FC<TSort> = () => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectFilter);
  const sortTaskByStatus = (sortItem: TSort): Action =>
    dispatch(setSort(sortItem));

  const changeCategory = (newCategory: string): void => {
    dispatch(setCategory(newCategory));
  };

  const sortTaskAndChangeCategoryHandler = (task: TSort): void => {
    if (task.sortKey) {
      sortTaskByStatus(task);
      changeCategory(task.sortKey);
    }
  };

  return (
    <ul className={styles.sort}>
      <div className={styles.sort__wrapper}>
        <span className={styles.span}>Сортировка по: {sort.sortKey}</span>
        {sortedTask.map((task) => (
          <button
            key={task.sortKey}
            onClick={() => sortTaskAndChangeCategoryHandler(task)}
            className={styles.button}
          >
            {task.sortKey}
          </button>
        ))}
      </div>
    </ul>
  );
};

export default Sort;
