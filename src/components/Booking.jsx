import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { apidomain } from '../utils/domains';
import Axios from 'axios'
import './booking.css'
function Booking() {
  const navigate= useNavigate();
  const schema = yup.object().shape({
    SpotNumber: yup.string().required("SpotNumber is required"),
    SpotType: yup.string().required("SpotType is required"),
    Floor: yup.string().required("Floor is required"),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
  const onSubmit = (data) => {
      Axios.post(`${apidomain}/ParkingSpots`, data)
          .then((response) => {
              console.log(response);
              console.log('success', response.data.message);
              navigate("/home");
          })
          .catch((response) => {
              console.log(response)

          });
  }
  return (
    <div className='booking'>
      <form className='bookingform' onSubmit = { handleSubmit(onSubmit)}>
        <label htmlFor="">Vehicle No:</label>
        <input type="text" {...register("SpotNumber")} placeholder='SpotNumber' />
        <p>{errors.SpotNumber?.message}</p>
        <label htmlFor="">Type:</label>
        <input type="text" {...register("SpotType")} placeholder='what is to be parked?' />
        <p>{errors.LastName?.message}</p>
        <label htmlFor="">Location:</label>
        <input type="text" {...register("Floor")} placeholder='location levels' />
        <p>{errors.Floor?.message}</p>
        <button type='submit'>Book your slot</button> 
      </form>
    </div>
  )
}
export default Booking