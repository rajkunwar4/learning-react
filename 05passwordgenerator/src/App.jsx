import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  //length, createPassword(), number, character;
  const [length,setLength]=useState(8);
  const[number,setNumber]=useState(false);
  const[char,setChar]=useState(false);
  const[password,setPassword]=useState("");

  //useCallback hook and password generator
  const passwordGenerator= useCallback(()=>{
    let pass="";
    let str="";
    str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number) str+="0123456789"
    if(char) str+="`@!$%^&~"

    for(let i=0;i<length;i++){
      let val=Math.floor(Math.random()*(str.length-1));
      pass+=str[val];
    }  
    setPassword(pass);
  },[length,number,char])

  const passRef= useRef(null);

  const copyPassword=()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  //useEffect, calls the function everytime there is a change in the dependencies
  useEffect(()=>{passwordGenerator()}, [length, number, char, passwordGenerator])

  // passwordGenerator();
  // console.log(password,length,char);

  return (
    <>

      <h1 className='text-2xl text-center text-white bg-blue-900'>Password Generator</h1>
      <div className='flex justify-center align-center'>
        <input className='m-2 rounded-xl border-blue-700 text-xl text-center' type="text" readOnly value={password} placeholder='password' ref={passRef}/>
        <button className='bg-orange-400 rounded p-0' onClick={copyPassword}>copy</button>
      </div>

      <div className='flex justify-center'>
        {/* range */}
      <input type="range" className="mr-3 cursor-pointer" min={8} max={16} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
      <label htmlFor="" className='text-white mr-2'>Length: {length}</label>
      {/* number */}
      <input type="checkbox" onChange={(e)=>{setNumber(prev=>!prev)}} />
      <label className="text-white mr-6 ml-1" >Number</label>
      {/* character */}
      <input  type="checkbox" onChange={(e)=>{setChar(prev=>!prev)}}/>
      <label className="text-white text-white mr-6 ml-1">Char</label>
      </div>
      
    
    </>

  )
}

export default App
