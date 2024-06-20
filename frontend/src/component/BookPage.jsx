import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookPage = () => {
  const { id } = useParams(); // Assuming you're using React Router and passing the book ID via URL params
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authordetails, setAuthordetails] = useState(null); // Initialize as null or {}

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/book/getabookbyid/${id}`);
        setBook(response.data);
        if (response.data.author) {
          getUser(response.data.author);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };



    //books added by author 
    const getUser = async (authorId) => {
      try {
        const res = await axios.get(`http://localhost:4001/user/getuser/${authorId}`);
        setAuthordetails(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchBookData();
  }, [id]);

  const handleBuyBook = async (bookId) => {
    console.log(bookId)
    try {
      const response = await axios.post(`http://localhost:4001/book/buybook/${bookId}/${authordetails._id}`);
      console.log('Book bought:', response.status);
        alert('Book bought successfully');
    } catch (error) {
      if(error.response.status===400){
        alert('You have already bought this book');
      }
      else{
        console.error('Error buying book:', error.response.status);
      }
    }
  };

  if (loading) return <p className='text-center mt-8'>Loading...</p>;
  if (error) return <p className='text-center mt-8'>Error: {error}</p>;

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center justify-center p-6'>
      <div className='lg:w-3/4 flex flex-col lg:flex-row items-start lg:items-center justify-center p-6 bg-white rounded-lg shadow-lg'>
        {/* Image Section */}
        <div className='lg:w-1/2'>
        <figure><img src={book.image} alt="Shoes" /></figure>
        </div>
        {/* Text Section */}
        <div className='lg:w-1/2 lg:ml-12 flex flex-col gap-4'>
          <div>
            <span className='text-pink-600 font-semibold text-sm uppercase tracking-wide'>{book?.category}</span>
            <h1 className='text-4xl font-bold text-gray-900 mt-2'>{book?.title}</h1>
            {authordetails && (
              <span className='text-gray-900 py-2 px-4 rounded-lg block'>by {authordetails.fullname}</span>
            )}
            <span className='text-gray-700 text-sm'>{book?.date?.substring(0, 10)}</span>
          </div>
          <p className='text-gray-700 text-lg mt-2'>{book?.description}</p>
          <div className='flex items-center gap-4 mt-4'>
            <button className='bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-500 transition duration-200' onClick={()=>handleBuyBook(book._id)}>
              Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
