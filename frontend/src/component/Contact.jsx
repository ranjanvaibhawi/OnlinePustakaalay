import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className='flex h-screen justify-center items-center '>
    <div  className="w-[600px]">
    {/* border shadow-md  p-5 rounded-md */}
    <div className="modal-box dark:bg-neutral-content">
  <form method="dialog" className="modal-backdrop" onSubmit={handleSubmit(onSubmit)}>
  {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
    <h3 className="font-bold text-2xl text-center text-slate-700">Contact Us</h3>
    <div className='mt-4 items-center justify-center text-slate-700'>
        <span className='text-slate-700'>Name</span>
        <br/>
        <input type="name"
            placeholder='Enter your full name'
            className='w-80 px-3 py-1 border rounded-md outline:none mb-4 mt-2'
            {...register("name", { required: true })}
        />
        <br/>
        {errors.email && <span className='text-sm text-pink-700'>This field is required</span>}
        <br/>
        <span className='text-slate-700'>Email</span>
        <br/>
        <input type="email"
            placeholder='Enter your email'
            className='w-80 px-3 py-1 border rounded-md outline:none mb-4 mt-2'
            {...register("email", { required: true })}
        />
        <br/>
        {errors.email && <span className='text-sm text-pink-700'>This field is required</span>}
        <br/>
        <span className='text-slate-700'>Message</span>
        <br/>
        <input type="message"
            placeholder='Enter the message'
            className='w-80 px-3 py-1 border rounded-md outline:none text-slate-700'
            {...register("message", { required: true })}
        />
         <br/>
        {errors.message && <span className='text-sm text-pink-700'>This field is required</span>}
        
    </div>
    {/* Buttons */}
    <div className='flex justify-around'>
        <button className='bg-pink-500 text-white px-2 py-1 mt-4 text-xl rounded-md hover:bg-pink-600 duration-200' type="submit">Submit</button>
        
    </div>
    </form>
  </div>
  <form className="modal-backdrop">
    <button>close</button>
    </form>
  
  
</div>
    </div>
  )
}

export default Contact