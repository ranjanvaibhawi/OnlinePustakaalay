import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'
function Logout() {
  const [authUser,setAuthUser]=useAuth()
  const handleLogout=()=>{
    try{
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem('Users')
      toast.success("Logged Out Successfully!")
      setTimeout(()=>{
        window.location.reload()
      },800)
      
    }catch(err){
      toast.error("Error: "+err.message)
      setTimeout(()=>{
      },800)
    }
  }
  return (
    <div><button className='px-3 py-2 bg-pink-600 rounded-md cursor-pointer text-white dark:text-slate-700'
    onClick={handleLogout}
    >Logout</button></div>
  )
}

export default Logout