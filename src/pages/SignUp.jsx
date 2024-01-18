import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { apidomain } from '../utils/domains';
import Axios from 'axios'
import './signup.css'
function SignUp() {
  const navigate= useNavigate();
  const schema = yup.object().shape({
    FirstName: yup.string().required("FirstName is required"),
    LastName: yup.string().required("lastname is required"),
    EmailAddress: yup.string().required("EmailAddress is required"),
    PhoneNumber: yup.string().required("Phonenumber is required"),
    Address: yup.string().required("Address is required"),
    Password: yup.string().required("Passwords is required").min(4, "Password is too short"),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
  const onSubmit = (data) => {
      // console.log('hello world')
      Axios.post(`${apidomain}/auth/register`, data)
          .then((response) => {
              console.log(response);
              // response.data.message && alert (response.data.message);
              console.log('success', response.data.message);
              navigate("/Login");
          })
          .catch((response) => {
              console.log(response)
              // console.log(response.data.response);
              // alert("failed",response.data.response)

          });
  }
  return (
    <div className='signup'>
      <form className='signupform' onSubmit = { handleSubmit(onSubmit)}>
        <label htmlFor="">Firstname</label>
        <input type="text" {...register("FirstName")} placeholder='firstname' />
        <p>{errors.FirstName?.message}</p>
        <label htmlFor="">Lasttname</label>
        <input type="text" {...register("LastName")} placeholder='lastname' />
        <p>{errors.LastName?.message}</p>
        <label htmlFor="">Email</label>
        <input type="text" {...register("EmailAddress")} placeholder='email' />
        <p>{errors.Email?.message}</p>
        <label htmlFor="">Phonenumber</label>
        <input type="text" {...register("PhoneNumber")} placeholder='phonenumber' />
        <p>{errors.PhoneNumber?.message}</p>
        <label htmlFor="">Address</label>
        <input type="text" {...register("Address")} placeholder='address' />
        <p>{errors.Address?.message}</p>
        <label htmlFor="">Password</label>
        <input type="password" {...register("Password")} placeholder='password' />
        <p>{errors.password?.message}</p>
        <label htmlFor="">Confirmpassword</label>
        <input type="password" {...register("ConfirmPassword")} placeholder='confirmpassword' />
        <p>{errors.ConfirmPassword?.message}</p>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default SignUp




