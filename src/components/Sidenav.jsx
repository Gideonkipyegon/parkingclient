import './Sidenav.css';
import { useContext } from 'react'
import { Context } from "../context/parkingContext/context";

export default function Sidenav() {
  const { dispatch } = useContext(Context);
  const handleAdd = () => {
      dispatch({ type: "ADD", payload: 'add' })
  }
  const handleView = () => {
      dispatch({ type: "ADD", payload: 'view' })
  }
  const handleBooking = () => {
      dispatch({ type: "BOOKING", payload: 'Booking' })
  }
  const handleSignup = () => {
    dispatch({ type: "SIGNUP", payload: 'Signup' })
}
  const handleAdmin = () => {
    dispatch({ type: "ADMIN", payload: 'Admin' })
}
const handlePayment = () => {
  dispatch({ type: "PAYMENT", payload: 'Payment' })
}
const handleAbout = () => {
  dispatch({ type: "ABOUT", payload: 'About' })
}
  return (
    <div className='sidenav'>
      <h1 style={{textDecoration:"underline",textAlign:'center'}}>Dashboard</h1>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handleAdd}>Booking</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handleView}>Bookinglist</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handleSignup}>Signup</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handleAdmin}>Admin</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handlePayment}>Payment</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handleAbout}>About</div>
      </div>
    </div>
  );
}