import React from 'react'
import img from '../../../images/saavi.jpg'
function About() {
  return (
    <>
    
    
<div className=" max-w-screen-2xl container text-center justify-center content-center">
<br/>
<br/>
<br/>
<br/>
<h1 className="text-2xl md:text-4xl font-bold  ">
           About
            <span className="text-pink-500"> Us</span>
          </h1>
          
      <div className="w-full order-2 md:order-2 px-40 mt-10 text-center justify-center items-center content-center">
        <div className="space-y-8">
        <div className="avatar object-center">
            <div className=" object-center  h-80  rounded-full ring-offset-2">
                <img className="" src={img} />
                </div>
        </div> 
            <p className="text-sm md:text-md mt-28">
            <span className="text-md md:text-xl">Welcome to our online bookstore, a project lovingly crafted by Saachi and Vaibhawi, two passionate Computer Science undergraduates from MNNIT Allahabad.</span>
            <br/>
            <br/>
<span className="text-pink-500 text-xl">Who We Are ?</span>
<br/>
We are Saachi and Vaibhawi, driven by a shared enthusiasm for coding, problem-solving, and tackling challenges head-on. Our journey through the intricate world of Computer Science has equipped us with the skills to create innovative solutions and the resilience to debug and optimize them until they shine.
<br/>
<br/>
<br/>
<span className="text-pink-500 text-xl">Our Project:</span>
<br/>
<br/>
Our online bookstore is more than just a repository of books. It provides convenience ; Browse and purchase books from the comfort of your home and accessibility; Easy navigation and search functionality to find exactly what you need.
          
          </p>
          
          
      </div>
      <br/>
<br/>
<br/> 
      </div>
    </div>

</>
  )
}

export default About