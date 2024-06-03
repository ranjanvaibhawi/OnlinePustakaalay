import React,{useState,useEffect}from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 
import Cards from './Cards';
import axios from 'axios';
const Freebook = () => {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
    try{
      const res=await axios.get("http://localhost:4001/book")
      console.log(res.data.filter((data)=>data.category=="Free"))
      const data=res.data.filter((data)=>data.category=="Free")
      setBook(data)
    }catch(error){
      console.log(error)
    }
    }
    getBook();
  },[])
  //const filterData=list.filter((data)=>data.category=="Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // console.log(filterData)
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <h1 className='font-bold text-x1 pb-2px'>Free Books</h1>
      <div>
      <p>
        Hello guys! we bring you a collection of books available for free, do enjoy them.
        And for a little more, do subscribe to access our premium collection.
      </p>
     
    </div>
    <div className="slider-container">
      <Slider {...settings}>
        {book.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook