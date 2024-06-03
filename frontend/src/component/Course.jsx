import React, { useEffect, useState } from 'react'
import Cards from '../component/Cards'
import {Link} from 'react-router-dom'
import axios from "axios"
import { get } from 'mongoose'
function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
    try{
      const res=await axios.get("http://localhost:4001/book")
      console.log(res.data)
      setBook(res.data)
    }catch(error){
      console.log(error)
    }
    }
    getBook();
  },[])
  return (
    <>
      <div>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className=' items-center justify-center text-center'>
          <div className='mt-6'>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1 className='text-2xl  md:text-4xl'>We are delighted to have you with <span className='text-pink-500'>us! :)</span></h1>
          <p className='mt-8'>
            Hello! We are extremely delighted to have you here and we wish that you have a similiar experience through this platform. Below are all the books accessible to you. Please enjoy them and keep <span className='text-pink-500'> hustling!</span>
          </p>
          <Link to ="/">
          <button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-pink-700 duration-200'>Back</button>
          </Link>
          </div>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 px-2 py-2'>
          {book.map((item)=>(
            <Cards key ={item.id} item={item}/>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default Course