import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'
  
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) =>{
    const userInfo={
      //fullname:data.fullname,
      email:data.email,
      password:data.password
      
    
    }
    await axios
    .post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Login Successfully")
        setTimeout(()=>{
          document.getElementById("my_modal_2").close()
       window.location.reload()
        },800)
       
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))  ///saves data in browsers local storage  ,.user isliye kara so that message does not cme
    }).catch((err)=>{
     if(err.response){
      console.log(err)
      toast.error("Error:"+err.response.data.message)
      setTimeout(()=>{
      },800)
     }
    })
  }
  return (
    <div>

{/* Put this part before </body> tag */}
<dialog id="my_modal_2" className="modal">

  <div className="modal-box text-slate-700 dark:bg-neutral-content">
  <form method="dialog" className="modal-backdrop" onSubmit={handleSubmit(onSubmit)}>
  {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
    <h3 className="font-bold text-lg text-center text-slate-700">Login</h3>
    <div className='mt-4 items-center justify-center text-slate-700'>
        <span>Email</span>
        <br/>
        <input type="email"
            placeholder='Enter your email'
            className='w-80 px-3 py-1 border rounded-md outline:none mb-4 mt-2'
            {...register("email", { required: true })}
        />
        <br/>
        {errors.email && <span className='text-sm text-pink-700'>This field is required</span>}
        <br/>
        <span>Password</span>
        <br/>
        <input type="text"
            placeholder='Enter your password'
            className='w-80 px-3 py-1 border rounded-md outline:none'
            {...register("password", { required: true })}
        />
         <br/>
        {errors.password && <span className='text-sm text-pink-700'>This field is required</span>}
        
    </div>
    {/* Buttons */}
    <div className='flex justify-around'>
        <button className='bg-pink-500 text-white px-2 py-1 mt-4 rounded-md hover:bg-pink-600 duration-200' type="submit">Login</button>
        <p className=' mt-5'><span className='text-slate-700'>Not Registered </span><span className='text-pink-500'>yet?</span> <span className='text-pink-500 underline cursor pointer' ><a href="/signup">Signup</a></span></p>
    </div>
    </form>
  </div>
  <form className="modal-backdrop">
    <button>close</button>
    </form>
  
</dialog>
    </div>
  )
}

export default Login