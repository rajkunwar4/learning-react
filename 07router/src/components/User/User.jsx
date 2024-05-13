import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams();
  return (
    <div className='text-gray-600 font-bold bg-orange-200 p-3 text-center text-2xl m-8'>
      User: {userid}
    </div>
  )
}

export default User
