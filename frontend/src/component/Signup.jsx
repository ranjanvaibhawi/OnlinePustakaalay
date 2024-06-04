import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
const userInfo={
  fullname:data.fullname,
  email:data.email,
  password:data.password
  //call api

}
await axios
.post("http://localhost:4001/user/signup",userInfo)
.then((res)=>{
  console.log(res.data)
  if(res.data){
   toast.success("Sign-up Successfully")
  }
  localStorage.setItem("Users",JSON.stringify(res.data.user))  ///saves data in browsers local storage  ,.user isliye kara so that message does not cme
}).catch((err)=>{
 if(err.response){
  console.log(err)
  toast.error("Error:"+err.response.data.message)
 }
})
  }
  return (
    <div className='flex h-screen justify-center items-center'>
    <div  className="w-[600px]">
    {/* border shadow-md  p-5 rounded-md */}
    <div className="modal-box dark:bg-neutral-content">
  <form method="dialog" className="modal-backdrop" onSubmit={handleSubmit(onSubmit)}>
  {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
    <h3 className="font-bold text-lg text-center text-slate-700">Sign up</h3>
    <div className='mt-4 items-center justify-center text-slate-700'>
        <span className='text-slate-700'>Name</span>
        <br/>
        <input type="name"
            placeholder='Enter your full name'
            className='w-80 px-3 py-1 border rounded-md outline:none mb-4 mt-2'
            {...register("fullname", { required: true })}
        />
        <br/>
        {errors.fullname && <span className='text-sm text-pink-700'>This field is required</span>}
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
        <span className='text-slate-700'>Password</span>
        <br/>
        <input type="password"
            placeholder='Enter your password'
            className='w-80 px-3 py-1 border rounded-md outline:none text-slate-700'
            {...register("password", { required: true })}
        />
         <br/>
        {errors.password && <span className='text-sm text-pink-700'>This field is required</span>}
        
    </div>
    {/* Buttons */}
    <div className='flex justify-around'>
        <button className='bg-pink-500 text-white px-2 py-1 mt-4 rounded-md hover:bg-pink-600 duration-200' type="submit">Register</button>
        <p className=' mt-5'><Link to="/"><span className=' text-slate-700'>Already</span><span className='text-pink-500'> Registered?</span></Link> </p>
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

export default Signup