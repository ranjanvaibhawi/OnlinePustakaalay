import React from 'react'
import Homepage from './Home/Homepage'
import {Navigate, Route, Routes} from 'react-router-dom'
import Contactpage from './contact/Contactpage'
import Signup from './component/Signup'
import Login from './component/Login'
// import Contact from './component/Contact'
import Courses from '../src/course/Courses'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import AboutUs from './about/AboutUs'
const App = () => {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
    <>
   <div className="dark:bg-slate-900 dark:text-white">
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/courses" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
    <Route path="/signup" element={!authUser?<Signup/>:<Navigate to="/"/>}/>
    <Route path="/contact" element={<Contactpage/>}/>
    <Route path="/about" element={<AboutUs/>}/>
   </Routes>
   <Toaster/>
   </div>
    </>
  )
}

export default App