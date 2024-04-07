import React, { useState } from 'react';
import './payment.css';

const Payment = () => {
  const [duration, setDuration] = useState('hourly');
  const [amount, setAmount] = useState(getDefaultAmount('hourly'));

  function getDefaultAmount(selectedDuration) {
    switch (selectedDuration) {
      case 'hourly':
        return 5; // Your hourly rate
      case 'weekly':
        return 50; // Your weekly rate
      case 'monthly':
        return 150; // Your monthly rate
      default:
        return 0;
    }
  }

  const handleDurationChange = (e) => {
    const selectedDuration = e.target.value;
    setDuration(selectedDuration);
    // Calculate amount based on selected duration
    setAmount(getDefaultAmount(selectedDuration));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate payment processing logic
    console.log(`Payment processed for ${duration} duration with amount $${amount}`);
    // Alert user about successful payment
    alert('Payment successfully paid!');
    // Clear the present selection
    setDuration('hourly');
    setAmount(getDefaultAmount('hourly'));
  };

  return (
    <div>
      <h2>Select Payment Duration</h2>
      <form onSubmit={handleSubmit} className="payment-form" style={{display:'flex',flexDirection:"column",alignItems:'center',marginBottom:'20px',backgroundColor:"gray",width:'70%',height:"100%",justifyContent:'center',marginLeft:'200px'}}>
        <label>
          Hourly
          <input
            type="radio"
            value="hourly"
            checked={duration === 'hourly'}
            onChange={handleDurationChange}
          />
        </label>
        <label>
          Weekly
          <input
            type="radio"
            value="weekly"
            checked={duration === 'weekly'}
            onChange={handleDurationChange}
          />
        </label>
        <label>
          Monthly
          <input
            type="radio"
            value="monthly"
            checked={duration === 'monthly'}
            onChange={handleDurationChange}
          />
        </label>
        <div className="amount-info">
          Amount to pay: ${amount}
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;





