import {Todo} from "../features/redux/reducers/todo/type";
import {TSort} from "../features/redux/reducers/filter/type";

export const sortingTodos = (todo: Todo[], sort: TSort): Todo[] => {
    switch (sort.sortProperty) {
        case "All":
            return todo
        case "Active":
            return todo.filter((todo) => !todo.isCompleted)
        case "Completed":
            return todo.filter((todo) => todo.isCompleted)
        default:
            return todo
    }
}
