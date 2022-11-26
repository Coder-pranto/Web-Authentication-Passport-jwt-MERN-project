import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {useNavigate}  from 'react-router-dom';

const Login = () => {
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
      navigate('/login');
      console.log(err);
    })
  }, [])


  const handleLogin = ()=>{
    axios.post("http://localhost:8999/login",{username,password})
    .then((user)=>{
      localStorage.setItem("token",user.data.token)
      console.log('user is successfully login');
      navigate('/profile');
    })
    .catch(err=>{
      console.log(err);
      navigate('/login');
    })
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='Username'
      value= {username}
      onChange={(e) =>{
        setUsername(e.target.value);
      }} required/> &nbsp;
      <input type="password" placeholder='Password'
      value= {password}
      onChange={(e) =>{
        setPassword(e.target.value);
      }} required/>&nbsp;

<button type="submit" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;