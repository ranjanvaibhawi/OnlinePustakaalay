import React from 'react'
import image from '../../../images/book.jpg'
import { useNavigate } from 'react-router-dom';

const Cards = ({item,authUser}) => {

  const navigate = useNavigate();
    console.log(item._id)
  const handleClick = () => {
    
    navigate(`/bookpage/${item._id}`);
  };

  

  return (
    <    >
    <div className='mt-2 my-3 p-3'   onClick={handleClick}   style={{ cursor: 'pointer' }}>
    
    <div className="card w-96 bg-base-100 shadow-xl scale-90 hover:scale-95 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">
        {item.category}
      </div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline hover:bg-pink-500 duration-200-text-white px-2 py-3">Rs {item.price}</div> 

    </div>
  </div>
</div>
</div>
</>
  )
}

export default Cards