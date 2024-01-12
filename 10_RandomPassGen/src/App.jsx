import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length,setLength]= useState(8);
  const [number, setNumber] = useState(false);
  const [Character, setCharacter] = useState(false);
  const [Password,setPassword] = useState("");

  const randomPasswordGenerator = useCallback(()=>{
    let pass = "";
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(number){
      str+="0123456789";
    }
    if(Character) 
    {
      str+="!@#$%^&*(){}\\|";
    }
    
    for(let i=1; i<=length; i++){
      let randIndex = Math.round(Math.random()*length +1);
      str += str[randIndex];
    }
    setPassword(str);

  },[length,number,Character,setPassword])


  useEffect(()=>{
    randomPasswordGenerator()
  }, [length,number,Character,randomPasswordGenerator])

  return (
    <>
      <h1 className="">Random Password Generator</h1>
      <div className="bg-gray-100 h-screen w-screen">
        <div className="bg-gray-400 ">
          <input type="text" />
          <button>Copy</button>
        </div>
        <div>
          <label htmlFor="range">length</label>
          <input type="range" name="range" id="range"  />

          <input type="checkbox" name="number" id="number" />
          <label htmlFor="number">Number</label>

          <input type="checkbox" id="char" />
          <label htmlFor="char">SpecialChar</label>
        </div>
      </div>
    </>
  );
}

export default App;
