import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
function App() {
  const [amount,onAmountChange]= useState(0)
  const [from,setFrom ]= useState("usd")
  const [to,setTo ] = useState("inr")
  const [convertedAmount, SetconvertedAmount] = useState(0)

  const currencyInfo
  return (
    <>
      <h1 className='bg-black text-3xl text-white  p-8 rounded-xl'>Hare Krishna! Kridha💘💗💕💞 | Radha Krishna</h1>
    </>
  )
}

export default App
