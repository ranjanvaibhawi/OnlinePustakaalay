import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../assets/list.json'
import Cards from './Cards';
const Freebook = () => {
  const filterData=list.filter((data)=>data.category=="Free");
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
   console.log(filterData)
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
        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook