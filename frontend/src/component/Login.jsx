import React from 'react'

function Login() {
  return (
    <div>

{/* Put this part before </body> tag */}
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center dark:text-slate-700">Login</h3>
    <div className='mt-4 items-center justify-center dark:text-slate-700'>
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
    <div className='flex justify-around'>
        <button className='bg-pink-500 text-white px-2 py-1 mt-4 rounded-md hover:bg-pink-600 duration-200'>Login</button>
        <p className=' mt-5'><span className='dark:text-slate-700'>Not Registered </span><span className='text-pink-500'>yet?</span> <span className='text-pink-500 underline cursor pointer' ><a href="/signup">Signup</a></span></p>
    </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  )
}

export default Login