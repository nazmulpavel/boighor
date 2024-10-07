import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import app from '../../public/firebase/firebase.config';


export const AuthContext = createContext(null);

export default function Authprovider({children}) {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user,SetUser] =useState(null);
    const loginWithGoogle = () =>{
      return   signInWithPopup(auth,googleProvider) ;
    }
    const logOutUser = () =>{
      return signOut(auth);
    }; 
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        SetUser(currentUser);
        console.log(currentUser);
      })
      return()=>{
        unsubscribe();
      } 
    },[]);
  return (
    <>
        <AuthContext.Provider value={{loginWithGoogle, user , logOutUser}}>{children}</AuthContext.Provider>

    </>
  )
}
