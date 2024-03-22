import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { apidomain } from '../utils/domains';
import Axios from 'axios'
import './admin.css'
function Admin() {
  const navigate= useNavigate();
  const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    Password: yup.string().required("Passwords is required").min(4, "Password is too short"),
    
  })
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
  const onSubmit = (data) => {
      Axios.post(`${apidomain}/admins`, data)
          .then((response) => {
              console.log(response);
              console.log('success', response.data.message);
              navigate("/");
          })
          .catch((response) => {
              console.log(response)

          });
  }
  return (
    <div className='signup'>
      <fieldset>
      <form className='signupform3' onSubmit = { handleSubmit(onSubmit)}>
        <h3>Admin Login</h3>
        <label htmlFor="">username:</label>
        <input type="text" {...register("Username")} placeholder='username' />
        <p>{errors.Username?.message}</p>
        <label htmlFor="">Password:</label>
        <input type="text" {...register("Password")} placeholder='Password' />
        <p>{errors.Password?.message}</p>
        <button type='submit'>Login</button>
      </form>
      </fieldset>
    </div>
  )
}

export default Admin




