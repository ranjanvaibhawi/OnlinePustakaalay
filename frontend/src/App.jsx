import React from 'react'
import Homepage from './Home/Homepage'
import {Route, Routes} from 'react-router-dom'
import Contactpage from './contact/Contactpage'
import Signup from './component/Signup'
import Login from './component/Login'
// import Contact from './component/Contact'
import Courses from '../src/course/Courses'
const App = () => {
  return (
    <>
   <div className="dark:bg-slate-900 dark:text-white">
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/courses" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contactpage/>}/>
   </Routes>
   </div>
    </>
  )
}

export default App