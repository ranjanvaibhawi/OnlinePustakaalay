import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Navbar from './Navbar';
import Footer from '../component/Footer';

const AddBook = ({ authUser }) => {
  const [bookDetails, setBookDetails] = useState({
    price: '',
    category: '',
    image: '',
    title: '',
    description: '',
    author: authUser._id,
    booklink: '',
    date: '',
  });

  const [flag, setFlag] = useState(false);
  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4001/book/addbook/${authUser._id}`, bookDetails);
      console.log('Book added:', response.data);
      setFlag((prev) => !prev);
      setBookDetails({
        price: '',
        category: '',
        image: '',
        title: '',
        description: '',
        booklink: '',
        date: '',
        author: authUser._id,
      });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  useEffect(() => {
    const getMyBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/book/getbooks/${authUser._id}`);
        console.log('Books retrieved:', response.data);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getMyBooks();
  }, [authUser, flag]);

  return (
    <>
      <Navbar />
     
     
      <br />
      <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center w-4/5 '> {/* Adjusted width to 80% of the screen */}
        <div className="card border-pink-500 bg-base-100 shadow-xl scale-90 hover:scale-92 dark:bg-slate-900 dark:text-white border justify-center align-center p-8 border-pink-500 ">
          <h2 className='text-2xl md:text-4xl text-pink-500 text-center mb-4'>Add a New Book</h2>
          <br/>
          <br/>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className='text-md md:text-xl text-pink-500'>Price :</label>
              <input
                type="number"
                name="price"
                value={bookDetails.price}
                onChange={handleChange}
                required
                className="input ml-3"
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-pink-500'>Category :</label>
              <input
                type="text"
                name="category"
                value={bookDetails.category}
                onChange={handleChange}
                required
                className="input ml-3"
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-pink-500'>Image URL :</label>
              <input
                type="text"
                name="image"
                value={bookDetails.image}
                onChange={handleChange}
                required
                className="input ml-3"
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-pink-500'>Title :</label>
              <input
                type="text"
                name="title"
                value={bookDetails.title}
                onChange={handleChange}
                required
                className="input ml-3"
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-pink-500'>Description :</label>
              <input
                type="text"
                name="description"
                value={bookDetails.description}
                onChange={handleChange}
                required
                className="input ml-3"
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-pink-500'>Book Link :</label>
              <input
                type="text"
                name="booklink"
                value={bookDetails.booklink}
                onChange={handleChange}
                required
                className="input ml-3"
                
              />
            </div>
            <div className="mb-4">
              <label className='text-md md:text-xl text-pink-500'>Date :</label>
              <input
                type="date"
                name="date"
                value={bookDetails.date}
                onChange={handleChange}
                required
                className="input ml-3"
          
              />
            </div>
            <button type="submit" className="btn bg-pink-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-pink-700 duration-200">Add Book</button>
          </form>
          <h2 className='text-2xl md:text-4xl text-pink-500 text-center mt-8 mb-4'>My Authorized Books</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 px-2 py-2'>
            {books.map((book) => (
              <Cards key={book.id} authUser={authUser} item={book} />
            ))}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default AddBook;
