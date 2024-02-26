import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
  return (
    <div className='header'>
      <h5 className="logo">EasyParking</h5>
      <div className='header1'>
      <Link  to='/'></Link>
      <Link  to='/Home'>Home</Link>
      <Link  to='/Booking'>Booking</Link>
      <Link  to='/Admin'>Admin</Link>
      <Link  to='/Payment'>Payment</Link>
      {/* <Link  to='/Rates'>Rates</Link> */}
      <Link  to='/About'>About</Link>
      <Link  to='/Contact'>Contact</Link>
      <Link  to='/Login'>Login</Link>
      <Link  to='/Signup'>Signup</Link>
      </div>
    </div>
  )
}

export default Header