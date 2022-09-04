import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
