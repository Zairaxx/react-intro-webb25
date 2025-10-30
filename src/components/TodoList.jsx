import Todo from "./Todo.jsx"

const TodoList = (props) => {


    return(<div className="todo-list">
        <h3>Todolist</h3>
        <ul>
            {/* För varje todo i arrayen, returnera en Todo-komponent och skicka med namnet som props */}
            {/* Detta kommer ge oss tre Todo-komponenter, med varsin prop - Städa, Plugga React,   */}
            {props.data.map(todo => <Todo data={todo} />)}
        </ul>
    </div>)

}

export default TodoList