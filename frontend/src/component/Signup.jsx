import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
function Signup() {
  return (
    <div className='flex h-screen justify-center items-center '>
    <div  className="w-[600px]">
    {/* border shadow-md  p-5 rounded-md */}
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Signup</h3>
    <div className='mt-4 items-center justify-center'>
    <span>Name</span>
        <br/>
        <input type="text"
            placeholder='Enter your fullname'
            className='w-80 px-3 py-1 border rounded-md outline:none mb-4 mt-2'
        />
        <br/>
        <span>Email</span>
        <br/>
        <input type="email"
            placeholder='Enter your email'
            className='w-80 px-3 py-1 border rounded-md outline:none mb-4 mt-2'
        />
        <br/>
        <span>Password</span>
        <br/>
        <input type="text"
            placeholder='Enter your password'
            className='w-80 px-3 py-1 border rounded-md outline:none'
        />
    </div>
    {/* Buttons */}
    <div className='flex justify-around mt-6 text-md '>
        <button className='bg-pink-500 text-white px-2 py-1 mt-3 rounded-md hover:bg-pink-600 duration-200'>Register</button>
        <p className='mt-5 '
        ><Link to="/">Already <span className='text-pink-500  '> Registered?</span></Link></p>
        <Login/>
        {/* </p> */}
    </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button >close</button>
  </form>
</div>
    </div>
  )
}

export default Signup