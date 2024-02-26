import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/userContext/Context';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apidomain } from '../utils/domains';
import './admin.css'
function Admin() {
  // const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    Username: yup.string().required('Username is required'),
    password: yup.string().required('password is required').min(4, 'password is too short'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => { 
    Axios.post(`${apidomain}/admins`, data)
   .then(({data}) => {
    if(data.token){
        // dispatch({type:'LOGIN_SUCCESS', payload:data})
        alert("login successfull")
        navigate("/");
    }
   
})
.catch((response) => {
    console.log(response)
    alert("wrong credentials")
    
});}
  return (
    <div className='login'>
        <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
        <p><u>AdminLogin</u></p>
        <label htmlFor="">username</label>
        <input type="text" {...register('Username')} placeholder="Username"/>
        <p>{errors.FirstName?.message}</p>
        <label htmlFor="">Password</label>
        <input type="password" {...register('password')} placeholder="password"/>
        <p>{errors.password?.message}</p>
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Admin