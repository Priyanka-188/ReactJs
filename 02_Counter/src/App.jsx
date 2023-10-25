import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 10;
//hooks
//useState hook will propogate and update the value of variable to all the UI elements where it is used.
// syntax --  
// let [variable , variableUpdationFunction] = useState(default value of variable);
  let [counter, setCounter]= useState(10);

  function addValue(){
    // counter = counter+1;
    if(counter >= 20){
      setCounter(counter=20);
    }
    else{
      //setCounter can accept an callback function
      setCounter((prevCounter) => prevCounter+1);
      setCounter((prevCounter) => prevCounter+1);
      setCounter((prevCounter) => prevCounter+1);
    }
    
  }

  const reduceValue = ()=>{
    // counter = counter -1;
    if(counter <= 0){
      setCounter(counter=0);
    }
    else{
      setCounter((prevCounter) => prevCounter-1);
      setCounter((prevCounter) => prevCounter-1);
      setCounter((prevCounter) => prevCounter-1);
    }
 
  }


  return (
    <>
     <h1>Counter</h1>
     <h2>Counter value : {counter} </h2>


     <button
     onClick={addValue}
     >Counter Up</button>


     <button
     onClick={reduceValue}
     >Counter Down</button>

     <h2>New Counter: {counter}</h2>
     {counter}
    </>
  )
}

export default App
