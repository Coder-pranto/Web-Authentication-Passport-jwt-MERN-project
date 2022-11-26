import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {useNavigate}  from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username,setUsername] =  useState('');
  const [password,setPassword] =  useState('');

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:8999/profile",{
      headers:{
        Authorization: token,
      }
    }).then(() => navigate('/profile'))
    .catch((err)=>{
      navigate('/register');
      console.log(err);
    })
  }, [])


  function handleRegister(){
    axios.post("http://localhost:8999/register",{username,password})
    .then(()=>{
      console.log('user is registered');
      navigate('/login');
    })
    .catch(err=>{
      console.log(err);
      navigate('/register');
    })
  }
  return (
    <div>
      <h2>Register</h2>

      <input type="text" placeholder='Username'
      value= {username}
      onChange={(e) =>{
        setUsername(e.target.value);
      }} required/> &nbsp;

      <input type="password" placeholder='Password'
      value= {password}
      onChange={(e) =>{
        setPassword(e.target.value);
      }} required/> &nbsp;
      
      <button type="submit" onClick={handleRegister}>Register</button>


    </div>
  );
};

export default Register;
