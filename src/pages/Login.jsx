import React from 'react'
import { Link } from 'react-router-dom'
// import { Context } from '../context/userContext/Context';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apidomain } from '../utils/domains';
import './login.css'
function Login() {
  // const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    FirstName: yup.string().required('First is required'),
    Password: yup.string().required('Password is required').min(4, 'password is too short'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => { 
    Axios.post(`${apidomain}/auth/login`, data)
   .then(({data}) => {
    if(data.token){
        dispatch({type:'LOGIN_SUCCESS', payload:data})
        alert("login successfull")
        navigate("/Post");
    }
   
})
.catch((response) => {
    console.log(response)
    alert("wrong credentials")
    
});}
  return (
    <div className='login'>
        <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
        <p><u>Login</u></p>
        <label htmlFor="">Firstname</label>
        <input type="text" {...register('FirstName')} placeholder="firstname"/>
        <p>{errors.FirstName?.message}</p>
        <label htmlFor="">Password</label>
        <input type="password" {...register('Password')} placeholder="password"/>
        <p>{errors.Password?.message}</p>
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login