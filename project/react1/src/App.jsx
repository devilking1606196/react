import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let cou =10

  let [counter,setCounter] = useState(cou)

  
  const addValue =()=>{
    if(counter==20)
    return;
    setCounter(counter=>counter+1)
  }

  function desValue()
  {
    if(counter==0)
    return;
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Vijay and code</h1>
      <h2>Counter is {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={desValue}
      >Dec value</button>
      
    </>
  )
}

export default App
