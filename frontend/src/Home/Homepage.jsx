import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Freebook from '../component/Freebook'
import Banner from '../component/Banner'
function Homepage(authUser) {
  return (
    <>
    <Navbar/>
    <Banner />
    <Freebook authUser={authUser} />
    <Footer/>
    </>
  )
}

export default Homepage