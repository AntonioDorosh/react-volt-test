import React, { FC } from "react"
import styles from "./TodoHeader.module.scss"

const TodoHeader: FC = () => {
    return (
        <header className={styles.header}>
            <h1>Volt Testing</h1>
        </header>
    )
}

export default TodoHeader
