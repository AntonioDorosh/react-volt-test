export type Todo = {
    id: string
    title: string
    isCompleted: boolean
}

export type TodoState = {
    todos: Todo[]
    currentCategory: string
    countCompletedTodo: number
    countUncompletedTodo: number
}
