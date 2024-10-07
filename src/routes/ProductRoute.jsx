import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/Authprovider';

export default function ProductRoute() {
   const navigate = useNavigate();
   const {user} = useContext(AuthContext);
  if(user){
    console.log(user);
    return "Okay";

  }
    console.log("ollll");
    return navigate("/login");


}
