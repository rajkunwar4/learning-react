import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData]= useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/rajkunwar4")
        .then(res=>res.json())
        .then(data=>setData(data));
        
    },[])
    const keys=Object.keys(data);
    const keysList=keys.map((x)=>
        <li>{x}</li>
    )
    
  return (
    <div className='bg-gray-500 m-2 p-4'>
        <h2 className='text-2xl text-center font-bold bg-gray-500'>Github Profile</h2>
      <ul className='font-medium'>
        <img className ="rounded" src={data.avatar_url} alt="git profile pic" width="300" />
        <li>Bio: <span className='text-orange-700'>{data.bio}</span></li>
        <li>Followers: {data.followers}</li>
        <li>Following: {data.following}</li>
        <li>Public repos: {data.public_repos}</li>
      </ul>
    </div>
  )
}

export default Github
