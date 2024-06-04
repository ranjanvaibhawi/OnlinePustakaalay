import React, { createContext } from 'react'
export const AuthContext=createContext()
import { useState } from 'react'
import { useContext } from 'react'
export default function AuthProvider({children}) {
    //to recieve data from localStorage
    const intialAuthuser=localStorage.getItem('Users')
    //for managing states
    const [authUser,setAuthUser]=useState(
        intialAuthuser?JSON.parse(intialAuthuser):undefined
    );
  return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  );
}
//context api established so that 'Users' can be accessed from anywhere in the app
//useAuth hook createde
export const useAuth=()=>{
    return useContext(AuthContext)
}