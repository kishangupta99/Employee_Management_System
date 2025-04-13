import React from 'react'
//import { useState } from 'react'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

const logOutuser=()=>{
  localStorage.removeItem('loggedInUser')
  props.changeUser('')
  //window.location.reload()

}

  return (
    
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>username👋</span> </h1>
      <button onClick={logOutuser  }  className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
 