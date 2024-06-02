import React from 'react'
import Course from '../component/Course'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
function Courses() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        <Course/>
        </div>
        <Footer/>
    </>
  )
}

export default Courses