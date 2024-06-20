import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const AddBook = ({ authUser }) => {
    console.log(authUser)
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

  const [flag,setflag]=useState(false)
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
      setflag((prev)=>!(prev))
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
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={bookDetails.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={bookDetails.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={bookDetails.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={bookDetails.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={bookDetails.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Book Link:</label>
          <input
            type="text"
            name="booklink"
            value={bookDetails.booklink}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={bookDetails.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      <h2>My Authorized Books</h2>
      <ul>
        {books.map((book) => (
          <Cards key ={book.id} authUser={authUser} item={book}/>
        ))}
      </ul>
    </div>
  );
};

export default AddBook;