import Todo from "./Todo.jsx"

const TodoList = () => {

    return(<div className="todo-list">
        <h3>Todolist</h3>
        <ul>
            <Todo/>
            <Todo/>
            <Todo/>
        </ul>
    </div>)

}

export default TodoList