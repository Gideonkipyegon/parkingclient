import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { apidomain } from '../utils/domains';
import Axios from 'axios'
import './booking.css'
function Transaction() {
  const navigate= useNavigate();
  const schema = yup.object().shape({
    TotalAmount: yup.string().required("totalAmount is required"),
    PaymentMode: yup.string().required("PaymentMode is required"),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
  const onSubmit = (data) => {
      Axios.post(`${apidomain}/Transactions`, data)
          .then((response) => {
              console.log(response);
              console.log('success', response.data.message);
              alert("payment is successfully done")
              navigate("/home");
          })
          .catch((response) => {
              console.log(response)

          });
  }
  return (
    <div className='booking'>
      <form className='bookingform' onSubmit = { handleSubmit(onSubmit)}>
        <label htmlFor="">Total Amount:</label>
        <input type="text" {...register("TotalAmount")} placeholder='TotalAmount' />
        <p>{errors.TotalAmount?.message}</p>
        <label htmlFor="">Type of payment:</label>
        <input type="text" {...register("PaymentMode")} placeholder='Mode of Payment?' />
        <p>{errors.PaymentMode?.message}</p>
        <button type='submit'>Pay</button> 
      </form>
    </div>
  )
}
export default Transaction