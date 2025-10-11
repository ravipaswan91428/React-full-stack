import { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("black");
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color)
  }
  
  return (
    <div className="h-screen w-screen flex justify-center items-end p-10" style={{
      backgroundColor: backgroundColor
    }}>
      <div className="bg-gray-100 w-fit h-fit p-4 rounded-full flex gap-3">
        <button className="bg-gray-300 rounded-full px-6 py-2" 
        onClick={()=>{
          changeBackgroundColor("red");
        }}>Red</button>
         <button className="bg-gray-300 rounded-full px-6 py-2" 
        onClick={()=>{
          changeBackgroundColor("blue");
        }}>Blue</button>
         <button className="bg-gray-300 rounded-full px-6 py-2" 
        onClick={()=>{
          changeBackgroundColor("green");
        }}>Green</button>
         <button className="bg-gray-300 rounded-full px-6 py-2" 
        onClick={()=>{
          changeBackgroundColor("yellow");
        }}>Yellow</button>
      </div>
    </div>
  );
}

export default App;