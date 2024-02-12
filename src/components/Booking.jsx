import React, { useState } from 'react';
import './booking.css'

class Booking extends React.Component {
  render() {
    return (
      <ParkingSlotBooking />
    );
  }
}

const ParkingSlotBooking = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const availableSlots = [
    { id: 1, name: 'Slot 1' },
    { id: 2, name: 'Slot 2' },
    { id: 3, name: 'Slot 3' },
    { id: 4, name: 'Slot 4' },
    { id: 5, name: 'Slot 5' },
    { id: 6, name: 'Slot 6' },
    // Add more slots as needed
  ];

  const handleSlotSelection = (slotId) => {
    setSelectedSlot(slotId);
  };

  const handleBooking = () => {
    // Implement your booking logic here
    if (selectedSlot !== null) {
      alert(`Slot ${selectedSlot} booked successfully!`);
      // You may want to send a request to your server to update the database or perform other actions.
    } else {
      alert('Please select a parking slot before booking.');
    }
  };

  return (
    <div style={{marginLeft:'25px',marginBottom:'20px'}}>
      <h2>Parking Slot Booking</h2>
      <div>
        <p style={{marginLeft:'25px'}}>Available parking slots:</p>
        <ul>
          {availableSlots.map((slot) => (
            <li key={slot.id} onClick={() => handleSlotSelection(slot.id)} style={{ cursor: 'pointer', textDecoration: selectedSlot === slot.id ? 'underline' : 'none',marginLeft:'15px',color:'red'}}>
              {slot.name}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleBooking} style={{marginLeft:'25px',marginBottom:'20px',color:'black'}}>Book Your Slot</button>
  <a href='/Rates' style={{color:'red',textDecoration:'underline'}}>Rates us</a> 
    </div>
  );
};

export default Booking;
