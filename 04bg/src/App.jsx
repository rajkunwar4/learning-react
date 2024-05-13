import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")

  return (

    
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="flex justify-center align-center " >
      <button className="bg-red-500 rounded py-1 px-4 m-1" onClick={()=>setColor("red")}>Red</button>
      <button className="bg-green-500 rounded py-1 px-4 m-1"  onClick={()=>setColor("green")}> Green </button>
      <button  className="bg-blue-500 rounded py-1 px-4 m-1" onClick={()=>setColor("blue")}>Blue</button>
      </div>
      
    </div>
      
  )
}

export default App
