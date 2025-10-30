const Todo = (props) => {
    
    //Vi skickar en prop som heter "data" till denna komponent från TodoList.jsx. Där har vi namnet på vår todo
    return(
        <li className="todo-item">{props.data}</li>
    )
}

export default Todo;