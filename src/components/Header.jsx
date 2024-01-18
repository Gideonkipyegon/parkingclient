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
      <Link  to='/Admin'>Admin</Link>
      <Link  to='/About'>About</Link>
      <Link  to='/Contact'>Contact</Link>
      <Link  to='/Login'>Login</Link>
      <Link  to='/Signup'>Signup</Link>
     
      {/* <img src="./images/male-avatar-profile-picture-vector-10211761.jpg" alt="profile" width='4%' border-radius='15px'/> */}
      </div>
    </div>
  )
}

export default Header