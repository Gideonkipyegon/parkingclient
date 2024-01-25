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
    { id: 1, name: 'Slot A' },
    { id: 2, name: 'Slot B' },
    { id: 3, name: 'Slot C' },
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
    <div>
      <h2>Parking Slot Booking</h2>
      <div>
        <p style={{marginLeft:'25px'}}>Select a parking slot:</p>
        <ul>
          {availableSlots.map((slot) => (
            <li key={slot.id} onClick={() => handleSlotSelection(slot.id)} style={{ cursor: 'pointer', textDecoration: selectedSlot === slot.id ? 'underline' : 'none',marginLeft:'15px' }}>
              {slot.name}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleBooking} style={{marginLeft:'25px',marginBottom:'20px'}}>Book Slot</button>
    </div>
  );
};

export default Booking;
