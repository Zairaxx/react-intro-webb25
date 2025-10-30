import './App.css'
import Aside from './components/Aside'
import {Footer} from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  let myData = [{hej:"Test"}];

  return (
    <>
      <Header/>
      <div className="flex">
        <Main/>
        <Aside/>
      </div>
      <Footer/>
    </>
  )
}

export default App
