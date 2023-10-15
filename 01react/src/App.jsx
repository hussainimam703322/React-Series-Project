import { useState } from 'react'

import './App.css'

function App() {
  //In react any value change at anywhere it will reflect everywhere.its done by react itself using hooks for updation

  //initial  update
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("clicked", counter)
    //or, counter = counter+1; 
    setCounter(counter + 1); //use state - setcounter name will be anything
  }
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
    

  }


  return (
    <>
      <h1>Me-hi, React</h1>
      <h1>Reply- I am good</h1>
      <button
        onClick={addValue}>AddValue {counter}
      </button>
      <br />
      <button
        onClick={removeValue}>RemoveValue {counter}
      </button>

    </>
  )
}

export default App
