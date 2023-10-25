// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  // we can pass object and arrays both  as props 
  // let myobj = {
  //   username : "Kridha",
  //   age : 22
  // }

  // let myarr  = [1,2,3,5,6]

  return (
    <>
      <h1 className=' bg-green-400 p-4 rounded-xl mb-4'>Tailwind Test</h1>

      {/* <Card username = "chaiaurcode" someObj ={myobj} somearr = {myarr}/> */}
      <Card username ="Priyanka" btnText = "click meclick meclick me"/>
      <Card username ="Kridha"/>
      <Card username ="Madhav"/>

    </>
  )
}

export default App
