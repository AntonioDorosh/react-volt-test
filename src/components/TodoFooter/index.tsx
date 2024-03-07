import React, { FC } from "react"
import styles from "./TodoFooter.module.scss"
import {useAppSelector} from "../../features/redux/hooks/useStore";
import {selectCompletedTodoCount, selectUnCompletedTodo} from "../../features/redux/reducers/todo/slice";


const TodoFooter: FC = () => {
    const completedCount = useAppSelector(selectCompletedTodoCount)
    const unCompletedCount = useAppSelector(selectUnCompletedTodo)

    return (
        <footer className={styles.footer}>
            <p className={styles.footer__count}>
                uncompleted tasks: {unCompletedCount}
            </p>
            <p className={styles.footer__count}>completed tasks: {completedCount}</p>
        </footer>
    )
}

export default TodoFooter
