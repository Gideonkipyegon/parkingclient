import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='homecontainer'>
        <h3 style={{textAlign:'center',fontFamily:'sans-serif',fontSize:'medium'}}>welcome to easyparking system home of flexibility and efficiency✨</h3>
        <div className='homeimage'>
          <img src="./images/alex-suprun-A53o1drQS2k-unsplash.jpg" alt="car image" className="bg1"/>
          <img src="./images/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="car image" className="bg2"/>
          <img src="./images/white-modern-sport-car-parking-road.jpg" alt="car image" className="bg3"/>
          <img src="./images/white-offroader-jeep-parking.jpg" alt="car image" className="bg4"/>
          {/* Duplicate images to ensure continuity of animation */}
          <img src="./images/alex-suprun-A53o1drQS2k-unsplash.jpg" alt="car image" className="bg1"/>
          <img src="./images/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="car image" className="bg2"/>
          <img src="./images/white-modern-sport-car-parking-road.jpg" alt="car image" className="bg3"/>
          <img src="./images/white-offroader-jeep-parking.jpg" alt="car image" className="bg4"/>
        </div>
      </div>
    </div>
  );
}

export default Home;

