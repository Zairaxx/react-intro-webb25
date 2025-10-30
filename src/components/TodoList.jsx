import Todo from "./Todo.jsx"

const TodoList = (props) => {


    return(<div className="todo-list">
        <h3>Todolist</h3>
        <ul>
            {props.data.map(todo => <li>{todo}</li>)}
        </ul>
    </div>)

}

export default TodoList