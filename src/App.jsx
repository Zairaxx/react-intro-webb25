import './App.css'
import TodoList from './components/TodoList'

function App() {

  let heading = "React Intro - WEBB25";
  let library = "React";

  return (
    <>
      <h1>{heading}</h1>
      <h2>{library} är det populäraste JS-biblioteket!</h2>
      <TodoList/>
    </>
  )
}

export default App
