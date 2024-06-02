import React from 'react'
import Homepage from './Home/Homepage'
import {Route, Routes} from 'react-router-dom'
import Courses from './course/Courses'
const App = () => {
  return (
    <>
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/courses" element={<Courses/>}/>
   </Routes>
    </>
  )
}

export default App