import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className='home'>
      {/* <h1>Easyparking</h1> */}
      <div className='homecontainer'>
      <div className='homeimage'>
      <img src="./images/alex-suprun-A53o1drQS2k-unsplash.jpg" alt="car image" width='100%' height='100%'/>
      </div>
      {/* <div className='home-elements'>
      <form className='loginform'>
            <p><u>Login</u></p>
            <label htmlFor="">Firstname:</label>
            <input type="text" placeholder="fisrtname"/>
            <label htmlFor="">Password:</label>
            <input type="password" placeholder="password"/>
            <a href="Signup">Signup?</a>
            <button type='submit'>Login</button>
        </form>
      </div> */}
      </div>
    </div>
  )
}

export default Home