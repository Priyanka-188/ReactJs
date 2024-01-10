import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <div
        className="w-screen h-screen  "
        style={{ backgroundColor: color }}
      >
        <div style={{paddingTop:"11% ",paddingLeft:"16%"}} > 
       
          <div className="flex justify-center  flex-wrap p-2 space-x-4 bg-white w-3/4 rounded-full">
            <button
              onClick={() => {
                setColor("pink");
              }}
              className="rounded-full text-white"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="rounded-full text-white"
              style={{ backgroundColor: "blue", color: "white" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("yellow");
              }}
              className="rounded-full "
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="rounded-full text-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("gray");
              }}
              className="rounded-full text-white"
              style={{ backgroundColor: "gray" }}
            >
              Yellow
            </button>
            <button
              onClick={() => {
                setColor("red");
              }}
              className="rounded-full text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("orange");
              }}
              className="rounded-full text-white"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => {
                setColor("aqua");
              }}
              className="rounded-full text-white"
              style={{ backgroundColor: "aqua" }}
            >
              Aqua
            </button>
            <button
              onClick={() => {
                setColor("black");
              }}
              className="rounded-full text-white"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => {
                setColor("voilet");
              }}
              className="rounded-full "
              style={{ backgroundColor: "voilet" }}
            >
              Voilet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
