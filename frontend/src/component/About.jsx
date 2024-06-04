import React from 'react'
import img from '../../../images/saavi.jpg'
function About() {
  return (
    <>
    {/* <div className='mt-2 my-3 p-3 justify-center items-center bg-base-100 shadow-xl scale-90 hover:scale-95'>
        <img src={img} alt="VV and Saamchi" />
    </div> */}
    <div className="avatar object-center">
  <div className=" object-center items-center justify-center mt-28 my-20 ml-4 h-80  rounded-full ring-offset-2">
    <img className="" src={img} />
  </div>
</div>
</>
  )
}

export default About