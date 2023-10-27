import { useState,useCallback ,useEffect,useRef} from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="0123456789"
      }
    if(charAllowed){
      str+="!@#$%^&*()_+=?><{}[]/"
    }

    for(let i=1 ;i<=length ; i++){
      let index = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)

  },[length, numberAllowed, charAllowed,setPassword])
  //setPassword is not neccasary to pass ,we pass it just for memoisation

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,101);
  window.navigator.clipboard.writeText(password)
},[password])

  //we can not directly call the passwordGenerator() function because we use useCallback hook to define it , so we have to use use useEffect hook to call it
  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed,passwordGenerator])
  return (
    
    <div className=" max-w-lg mx-auto shadow-md rounded-lg px-4 py-3  my-28 bg-gray-800 text-red-500">
      <h1 className='text-white text-center my-3 text-2xl'>Password Generator</h1>
      <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text"
          value ={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly   
          ref = {passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
         
        </button>
      </div>


      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'

              onChange={(e) =>{setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>

        <div className='flex gap-x-2'>
          <input 
              type="checkbox"
              defaultChecked ={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed((prev) => !prev);
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input 
              type="checkbox"
              defaultChecked ={charAllowed}
              id='characterInput'
              onChange={()=>{
                setCharAllowed((prev) =>!prev);
              }}
          />
          <label htmlFor='characterInput'>Special Chars</label>
        </div>
      </div>
    </div>
    
  )
}

export default App
