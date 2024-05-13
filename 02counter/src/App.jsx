import { useState } from 'react'



function App() {
  
  let [age,countAge]=useState(5);
  return (


    <>
     
    <h3>welcome to react</h3>
    <h1 onClick={()=>{
      if(age>=0 && age<=20)
      countAge(age+1)
    else{
      return;
    }
    }}>{age}</h1>

    <h3>{age}</h3>
    <h2>{age}</h2>

    </>
  )
}

export default App
