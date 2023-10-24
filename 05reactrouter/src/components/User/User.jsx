import React from 'react'
import { useParams } from 'react-router-dom'
//useparam is a method 
function User() {
  const {userid} = useParams() // custom hook
  return(
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User