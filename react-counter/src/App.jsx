
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return(
    <Button HandleClick = {handleClick} text = 'Click Me'>
    <h1>{count}</h1>
    </Button>
    // <Card name = 'dating-card'>
    //   <h1>I am Consistent</h1>
    //   <p>Harsh is a advance problem solver</p>
    //   <p>Also building the form in Devlopment</p>
    // </Card>
  )
  
}

export default App
