import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import contentData from './data'

function App() {
  const [count, setCount] = useState(0)

 
  const contentDataArray = contentData.map(item => {
    return <Card
      key={item.id}
      {...item}
    
    />
  })
  return (
    <div className="App">
      <Navbar/>
      {contentDataArray}
      
    </div>
  )
}

export default App
