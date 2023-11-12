import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [savedcount, setsavedCount] = useState([])
  // let count = 1

  const addCount = () => {
    if(count < 20){
      setCount(count + 1)
    }
  }

  const removeCount = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  const saveCount = () => {
    setsavedCount([...savedcount, count])
    setCount(0)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {count}</h2>
      <h5>Current Count: {savedcount}</h5>

      <button onClick={addCount}>Increase Count</button>
      <br />
      <br />
      <button onClick={removeCount}>Decrease Count</button>
      <hr />
      <button onClick={saveCount}>Save Count</button>
      </>
  )
}

export default App
