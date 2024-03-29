import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextProvider } from './context/userContext/Context.jsx'

// import { UIContextProvider } from "./context/parkingContext/Context.jsx";
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
// import Card  from './components/Card'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'
import Booking from './components/Booking.jsx' 
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import Admin from './components/Admin.jsx'
import Rates from './components/Rates.jsx'
import Reports from './components/Reports.jsx'
import Payment from './components/Payment.jsx'
import Bookinglist from './components/Bookinglist.jsx'
function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Sidenav />}/>
      <Route path='/Home' element={<Home />}/>
      <Route path='/Booking' element={<Booking />}/>
      <Route path='/Reports' element={<Reports />}/>
      <Route path='/Payment' element={<Payment />}/>
      <Route path='/Bookinglist' element={<Bookinglist/>}/>
      <Route path='/Admin' element={<Admin />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Rates' element={<Rates />}/>
      <Route path='/Signup' element={<SignUp />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
      )
}

export default App
