import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './Home/Homepage';
import Contactpage from './contact/Contactpage';
import Signup from './component/Signup';
import Login from './component/Login';
import AddBook from './component/newbook';
import Courses from '../src/course/Courses';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import AboutUs from './about/AboutUs';
import Profile from './profile/Profile';
import BookPage from './component/BookPage';
import Pdf from './component/Pdf';

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to="/" />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/signup" />} />
        <Route path="/bookpage/:id" element={<BookPage />} />
        <Route path="/addbook" element={authUser ? <AddBook authUser={authUser} /> : <Navigate to="/signup" />} />
        <Route path="/pdf" element={<Pdf />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
