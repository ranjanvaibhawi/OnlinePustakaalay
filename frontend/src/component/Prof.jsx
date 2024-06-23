import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import Cards from './Cards'
import { useState,useEffect } from 'react'
function Prof(authUser) {
    const storedUserData = localStorage.getItem('Users')
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    // if (storedUserData) {
      const userData = JSON.parse(storedUserData)
      const onSubmit = async (data) => {
        const userInfo={
          id:userData._id,
          fullname:userData.fullname,
          email:userData.email,
          password:data
          //call api
        
        }
        await axios
        .post("http://localhost:4001/change/changepassword",userData)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
           toast.success("Password change succesfully")
          }
       
          
        }).catch((err)=>{
         if(err.response){
          console.log(err)
          toast.error("Error:"+err.response.data.message)
          setTimeout(()=>{
          },800)
         }
        })
          }
          const [book,setBook]=useState([])
          useEffect(() => {
            const getMyBooks = async () => {
              try {
                const response = await axios.get(`http://localhost:4001/book/mybooks/${userData._id}`);
                console.log('My Books:', response.data);
                setBook(response.data);
              } catch (error) {
                console.error('Error fetching my books:', error);
              }
            };
            getMyBooks();
          }, [userData._id]);
     
  return (
    <>
        <div>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
            <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    <br/>
                    <br/>
                    <br/>
                <div className=' items-center border border-pink-500 p-8 justify-center items-center rounded-lg'>
                    <div className='mt-6'>
            
                    <div className='justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl'>Hello<span className='text-pink-500'> {userData.fullname} !</span></h1>
                    </div>
                    <div className='display-flex text-md md:text-xl'>
                        <span className='text-pink-500'>Username  :</span>      {userData.fullname}
                    </div>
                    <br/>
                    <br/>
                    <div className='display-flex text-md md:text-xl'>
                        <span className='text-pink-500'>Email id :             </span> {userData.email}
                    </div>
                    <br/>
                    <br/>
                    <br/>
                  
                    </div>
                    <div>
                        <span className='text-xl md:text-2xl text-pink-500'>Past Purchases:</span>
                        
                        <div className='mt-5 grid grid-cols-1 md:grid-cols-3 px-2 py-2'>
                        {book.map((item)=>(
                            <Cards key ={item.id} item={item} authUser={authUser}/>
                        ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Prof