import {
   createUserWithEmailAndPassword, updateProfile, getAuth,signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup,
    signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import app from '../../public/firebase/firebase.config';


export const AuthContext = createContext(null);

export default function Authprovider({children}) {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user,SetUser] =useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email,password)=>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginWithGoogle = () =>{
      setLoading(true);
      return   signInWithPopup(auth,googleProvider) ;
    }
    const logOutUser = () =>{
      setLoading(true);
      return signOut(auth);
    }; 
    const updateUserProfile = (profile) => {
      setLoading(true);
      return updateProfile(auth.currentUser, profile);
    };
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        SetUser(currentUser);
        console.log(currentUser);
        setLoading(false);

      })
      return()=>{
        unsubscribe();
      } 
    },[]);
  return (
    <>
        <AuthContext.Provider value={{loginWithGoogle, user,signIn, loading,createUser, updateUserProfile, logOutUser}}>{children}</AuthContext.Provider>

    </>
  )
}
