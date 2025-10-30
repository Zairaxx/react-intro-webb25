const Header = () => {

    let utbildning = "Fullstack-utvecklare";
    let namn = "Brandon";
    let klass = "WEBB25";

    return(
    <header style={{backgroundColor: "lightblue", color: "black" }}>
        <h1>{utbildning}</h1>
        <h2>{namn} - {klass}</h2>
    </header>)
}

export default Header