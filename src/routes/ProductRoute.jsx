import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/Authprovider';

export default function ProductRoute({children}) {
   const navigate = useNavigate();
   const {user} = useContext(AuthContext);
  if(user){
    console.log(user);
    return children;

  }
    console.log("ollll");
    return navigate("/login");


}
