import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count,setCount]=useState(0);

  return (
    <>
      <Card userName="Raj kunwar"  work="GigaChad" framework="Tailwind CSS" bg=""/>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1);
        console.log(`count increased---`);
      }}></button>
    </>
  )
}

export default App
