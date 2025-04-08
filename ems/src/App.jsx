import React, { useState } from 'react'
import Login from './components/Auth/Login'
import EmpolyeeDashboard from './components/Dashboard/EmpolyeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
 
  const [user, setUser] = useState("");

  const handleLogin = (email,password)=>{
    if(email=='admin@me.com' && password=='123'){
     setUser("admin");
      console.log('This is Admin');
  } else if(email=='user@me.com' && password=='123'){
     setUser("employee");
      console.log('This is Employee');
  }else{
    console.log('Invalid Credentials');
  }
}
  
handleLogin(); 

  
  
  
  return (
    <>
       {!user ? <Login hamdleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : ''}
      {user === 'employee' ? <EmpolyeeDashboard /> : ''}
      {/* <EmpolyeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
