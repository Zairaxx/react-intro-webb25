const Main = () => {

    const top5languages = ["Javascript","C#", "Java", "C++", "Python"];

    return(
    <main>
        <ol>
            {top5languages.map(item => <li>{item}</li>)}
        </ol>
    </main>)
}

export default Main