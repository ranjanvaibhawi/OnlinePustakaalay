import React from 'react'
import Navbar from '../component/Navbar'
import Prof from '../component/Prof'
import Footer from '../component/Footer'
export default function Profile(authUser) {
  return (
    <>
        <Navbar/>
        <Prof authUser={authUser}/>
        <Footer/>
    </>
  )
}
