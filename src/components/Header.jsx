const Header = (props) => {

    return(
        <header>
            <h1>Din todo-list</h1>
            <h2>Du har just nu {props.data.length} ärenden att utföra</h2>
        </header>
    )
}

export default Header