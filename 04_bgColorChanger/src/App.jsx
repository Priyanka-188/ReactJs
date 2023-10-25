import { useState } from "react"


function App() {
  const [color,setColor]=useState('aqua');


  return (
    <div className="w-full h-screen duration-200 "
    style= {{backgroundColor:color}}
    >

      <div className="fixed flex flex wrap justify-center bottom-12 inset-x-0 px-2 ">
        
        <div className="flex flex-wrap justify-center shadow-xl bg-white px-3 py-2 rounded-2xl ">

          {/* onClick expects an callback function */}
          <button onClick={()=> setColor("red")} 
          className="outline-none px-4 py-1 rounded-2xl text-white shadow-2xl mx-1"
          style={{backgroundColor : "red"}}
          >Red</button>

          <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-2xl mx-1"
          style={{backgroundColor : "blue"}}
          >blue</button>

          <button onClick={()=> setColor("Orange")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-2xl mx-1"
          style={{backgroundColor : "orange"}}
          >Orange</button>

          <button onClick={()=> setColor("Black")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-2xl mx-1"
          style={{backgroundColor : "Black"}}
          >Black</button>

          <button onClick={()=> setColor("grey")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-2xl mx-1"
          style={{backgroundColor : "grey"}}
          >grey</button>

          <button onClick={()=> setColor("pink")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-2xl mx-1"
          style={{backgroundColor : "pink", color:"black"}}
          >Pink</button>

          <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-2xl mx-1"
          style={{backgroundColor : "green"}}
          >Green</button>

          <button onClick={()=> setColor("olive")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-2xl mx-1"
          style={{backgroundColor : "olive"}}
          >Olive</button>

          <button onClick={()=> setColor("purple")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-2xl mx-1"
          style={{backgroundColor : "purple"}}
          >Purple</button>

          <button onClick={()=> setColor("lavender")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-2xl mx-1"
          style={{backgroundColor : "lavender", color:"black"}}
          >Lavender</button>

          <button onClick={()=> setColor("white")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-2xl mx-1"
          style={{backgroundColor : "white", color: "black"}}
          >White</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
