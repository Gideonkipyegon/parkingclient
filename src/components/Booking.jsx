// import React, { useState, useEffect } from 'react';
// import './booking.css'

// class Booking extends React.Component {
//   render() {
//     return (
//       <ParkingSlotBooking />
//     );
//   }
// }

// const ParkingSlotBooking = () => {
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [bookedSlots, setBookedSlots] = useState([]);
//   const [availableSlots, setAvailableSlots] = useState([
//     { id: 1, name: 'Slot 1' },
//     { id: 2, name: 'Slot 2' },
//     { id: 3, name: 'Slot 3' },
//     { id: 4, name: 'Slot 4' },
//     { id: 5, name: 'Slot 5' },
//     { id: 6, name: 'Slot 6' },
//     // Add more slots as needed
//   ]);

//   useEffect(() => {
//     // Load booked slots from localStorage
//     const storedBookedSlots = JSON.parse(localStorage.getItem('bookedSlots'));
//     if (storedBookedSlots) {
//       setBookedSlots(storedBookedSlots);
//     }
//   }, []);

//   useEffect(() => {
//     // Save booked slots to localStorage
//     localStorage.setItem('bookedSlots', JSON.stringify(bookedSlots));
//   }, [bookedSlots]);

//   const handleSlotSelection = (slotId) => {
//     setSelectedSlot(slotId);
//   };

//   const handleBooking = () => {
//     if (selectedSlot !== null) {
//       const bookedSlot = availableSlots.find(slot => slot.id === selectedSlot);
//       setBookedSlots([...bookedSlots, bookedSlot]);
//       setAvailableSlots(availableSlots.filter(slot => slot.id !== selectedSlot)); // Remove selected slot from available slots
//       setSelectedSlot(null); // Reset selected slot after booking
//     } else {
//       alert('Please select a parking slot before booking.');
//     }
//   };

//   const handleDelete = (slotId) => {
//     const updatedBookedSlots = bookedSlots.filter(slot => slot.id !== slotId);
//     setBookedSlots(updatedBookedSlots);
//     const deletedSlot = bookedSlots.find(slot => slot.id === slotId);
//     setAvailableSlots([...availableSlots, deletedSlot]); // Add deleted slot back to available slots
//   };

//   return (
//     <div style={{marginLeft:'25px',marginBottom:'20px'}}>
//       <h2>Parking Slot Booking</h2>
//       <div>
//         <p style={{marginLeft:'25px'}}>Available parking slots:</p>
//         <ul>
//           {availableSlots.map((slot) => (
//             <li key={slot.id} onClick={() => handleSlotSelection(slot.id)} style={{ cursor: 'pointer', textDecoration: selectedSlot === slot.id ? 'underline' : 'none',marginLeft:'15px',color:'red'}}>
//               {slot.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <button onClick={handleBooking} style={{marginLeft:'25px',marginBottom:'20px',color:'black'}}>Book Your Slot</button>
//       <div>
//         <h3>Booked Slots:</h3>
//         <ul>
//           {bookedSlots.map((slot) => (
//             <li key={slot.id}>
//               {slot.name} <button onClick={() => handleDelete(slot.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <a href='/Rates' style={{color:'red',textDecoration:'underline'}}>Rates us</a> 
//     </div>
//   );
// };

// export default Booking;



import React, { useState, useEffect } from 'react';
import './booking.css';

const Booking = () => {
  return (
    <ParkingSlotBooking />
  );
};

const ParkingSlotBooking = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([
    { id: 1, name: 'Slot 1' },
    { id: 2, name: 'Slot 2' },
    { id: 3, name: 'Slot 3' },
    { id: 4, name: 'Slot 4' },
    { id: 5, name: 'Slot 5' },
    { id: 6, name: 'Slot 6' },
    // Add more slots as needed
  ]);
  const [bookingMessage, setBookingMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const setMessageWithTimeout = (messageSetter, message) => {
    messageSetter(message);
    setTimeout(() => {
      messageSetter('');
    }, 3000); // 3000 milliseconds (3 seconds)
  };

  useEffect(() => {
    // Load booked slots from localStorage
    const storedBookedSlots = JSON.parse(localStorage.getItem('bookedSlots'));
    if (storedBookedSlots) {
      setBookedSlots(storedBookedSlots);
    }
  }, []);

  useEffect(() => {
    // Save booked slots to localStorage
    localStorage.setItem('bookedSlots', JSON.stringify(bookedSlots));
  }, [bookedSlots]);

  const handleSlotSelection = (slotId) => {
    setSelectedSlot(slotId);
  };

  const handleBooking = () => {
    if (selectedSlot !== null) {
      const bookedSlot = availableSlots.find(slot => slot.id === selectedSlot);
      setBookedSlots([...bookedSlots, bookedSlot]);
      setAvailableSlots(availableSlots.filter(slot => slot.id !== selectedSlot)); // Remove selected slot from available slots
      setSelectedSlot(null); // Reset selected slot after booking
      setMessageWithTimeout(setBookingMessage, 'Slot successfully booked.');
    } else {
      setMessageWithTimeout(setBookingMessage, 'Please select a parking slot before booking.');
    }
  };

  const handleDelete = (slotId) => {
    const updatedBookedSlots = bookedSlots.filter(slot => slot.id !== slotId);
    setBookedSlots(updatedBookedSlots);
    const deletedSlot = bookedSlots.find(slot => slot.id === slotId);
    setAvailableSlots([...availableSlots, deletedSlot]); // Add deleted slot back to available slots
    setMessageWithTimeout(setDeleteMessage, 'Slot successfully deleted.');
  };

  return (
    <div style={{ marginLeft: '25px', marginBottom: '20px' }}>
      <h2>Parking Slot Booking</h2>
      {bookingMessage && <p style={{ color: 'green' }}>{bookingMessage}</p>}
      {deleteMessage && <p style={{ color: 'red' }}>{deleteMessage}</p>}
      <div>
        <p style={{ marginLeft: '25px' }}>Available parking slots:</p>
        <ul>
          {availableSlots.map((slot) => (
            <li key={slot.id} onClick={() => handleSlotSelection(slot.id)} style={{ cursor: 'pointer', textDecoration: selectedSlot === slot.id ? 'underline' : 'none', marginLeft: '15px', color: 'red' }}>
              {slot.name}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleBooking} style={{ marginLeft: '25px', marginBottom: '20px', color: 'black' }}>Book Your Slot</button>
      <div>
        <h3>Booked Slots:</h3>
        <ul>
          {bookedSlots.map((slot) => (
            <li key={slot.id}>
              {slot.name} <button onClick={() => handleDelete(slot.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <a href='/Rates' style={{ color: 'red', textDecoration: 'underline' }}>Rates us</a>
    </div>
  );
};

export default Booking;
