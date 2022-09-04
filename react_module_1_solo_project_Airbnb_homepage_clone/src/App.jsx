import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import FooterBottom from './components/Footer'
import profile from './images/profile.png'
import ImageProfile from './components/ImageProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ImageProfile />
      <Card /><FooterBottom />
    </div>
  )
}

export default App
