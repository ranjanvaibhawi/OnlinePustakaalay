import React from 'react'
import Homepage from './Home/Homepage'
import {Route, Routes} from 'react-router-dom'
import Courses from './course/Courses'
const App = () => {
  return (
    <>
   <div className="dark:bg-slate-900 dark:text-white">
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/courses" element={<Courses/>}/>
   </Routes>
   </div>
    </>
  )
}

export default App