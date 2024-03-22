import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { apidomain } from '../utils/domains';
import Axios from 'axios'
import './booking.css'
function Payment() {
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
              alert("payment is successfully done,thanks for booking with us")
              navigate("/home");
          })
          .catch((response) => {
              console.log(response)

          });
  }
  return (
    <div className='booking'>
    <fieldset>
      <h3 style={{textAlign:'center',textDecoration:'underline'}}>Payment</h3>
      <form className='bookingform' onSubmit = { handleSubmit(onSubmit)}>
        <label htmlFor="">Total Amount:</label>
        <input type="text" {...register("TotalAmount")} placeholder='TotalAmount' />
        <p>{errors.TotalAmount?.message}</p>
        <label htmlFor="">Type of payment:</label>
        <input type="text" {...register("PaymentMode")} placeholder='Mode of Payment?' />
        <p>{errors.PaymentMode?.message}</p>
        <button type='submit'>Pay</button> 
      </form>
      </fieldset>
    </div>
  )
}
export default Payment




// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { apidomain } from '../utils/domains';
// import Axios from 'axios';
// import './booking.css';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// function Transaction() {
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);

//   const schema = yup.object().shape({
//     TotalAmount: yup.string().required("Total Amount is required"),
//     PaymentMode: yup.string().required("Payment Mode is required"),
//   });

//   const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = async (data) => {
//     try {
//       const cardElement = elements.getElement(CardElement);
//       const { paymentMethod, error } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: cardElement,
//       });

//       if (error) {
//         setError(error.message);
//         return;
//       }

//       const response = await Axios.post(`${apidomain}/charge`, {
//         amount: data.TotalAmount * 100, // Amount should be in cents
//         payment_method: paymentMethod.id,
//         description: data.PaymentMode,
//       });

//       console.log(response);
//       alert("Payment is successfully done");
//       navigate("/home");
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Something went wrong with the payment. Please try again later.");
//     }
//   };

//   return (
//     <div className='booking'>
//       <form className='bookingform' onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="">Total Amount:</label>
//         <input type="text" {...register("TotalAmount")} placeholder='Total Amount' />
//         <p>{errors.TotalAmount?.message}</p>
//         <label htmlFor="">Type of payment:</label>
//         <input type="text" {...register("PaymentMode")} placeholder='Mode of Payment' />
//         <p>{errors.PaymentMode?.message}</p>
//         <label htmlFor="">Card Details:</label>
//         <CardElement />
//         {error && <div style={{ color: 'black' }}>{error}</div>}
//         <button type='submit'>Pay</button> 
//       </form>
//     </div>
//   );
// }

// export default Transaction;
