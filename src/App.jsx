import './App.css'
import Header from './components/Header';
import TodoList from './components/TodoList'
function App() {

   const todos = ["Städa","Plugga React","Meditera"]

  return (
    <>
      <Header data={todos}/>
      <TodoList data={todos}/>
    </>
  )
}

export default App
