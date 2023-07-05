import {useState} from "react"
import AddTodo from "./AppToDo"
import TodoList from "./TodoList"

export default function Todo () {
    const [todoItems, setTodoItems] = useState();
    return (
        <main>
            <h1>Chekov Todo List</h1>
            <AddTodo setTodoItems={setTodoItems} />
            <TodoList todoItems={todoItems} setTodoItems={setTodoItems}/>
        </main>
    )
}