import React, { useState, useEffect } from 'react';
import './rate.css';

function Rates() {
  const [isRated, setIsRated] = useState(false);
  const [ratesData, setRatesData] = useState([]);

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const response = await fetch('http://localhost:3001/rates');
      if (!response.ok) {
        throw new Error('Failed to fetch rates');
      }
      const data = await response.json();
      setRatesData(data);
    } catch (error) {
      console.error('Error fetching rates:', error);
    }
  };

  return (
    <div className='rating'>
      {isRated ? (
        <div>
          Thank you for rating!.
        </div>
      ) : (
        <div>
          <h3>Rates Data:</h3>
          <ul>
            {ratesData.map((rateItem) => (
              <li key={rateItem.id}>
                Vehicle Type: {rateItem.VehicleType}, Spot Type: {rateItem.SpotType}, 
                Hourly Rate: {rateItem.HourlyRate}, Daily Rate: {rateItem.DailyRate}, 
                Monthly Rate: {rateItem.MonthlyRate}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Rates;
