// import React, { useEffect, useContext, useState } from 'react';
// import axios from 'axios';
// import { Context } from '../context/parkingContext/Context';
// // import { Context } from '../context/userContext/Context';
// // import { AiFillDelete, AiFillEdit, AiFillLike } from 'react-icons/Ai';
// // import { FaRegCommentAlt } from 'react-icons/Fa';
// import { apidomain } from '../utils/domains.js';
// import './bookinglist.css';
// import UpdateForm from './Updateform';

// function Bookinglist() {
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [posts, setParkingSpots] = useState([]);
//   const [tempPost, setTempPost] = useState('');
//   const { user } = useContext(Context);

//   useEffect(() => {
//     getParkingSpots();
//   }, []);

//   const getParkingSpots = async () => {
//     try {
//       const res = await axios.get(`${apidomain}/ParkingSpots`);
//       setParkingSpots(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const res = await axios.delete(`${apidomain}/Post/${id}`);
//       alert(res.data.message);
//       getPosts();
//     } catch (error) {
//       console.log(error);
//       alert(error.response?.data?.error || 'An error occurred while processing your request.');
//     }
//   };

//   const handleLikes = async (id) => {
//     if (!user || !user.token) {
//       console.log('User token not available.');
//       return;
//     }

//     try {
//       await axios.post(
//         `${apidomain}/Likes/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: user.token
//             ,
//           },
//       }
//       );

//       // Find the index of the post being liked in the 'posts' state array
//       const ParkingSpotsIndex = Spots.findIndex((ParkingSpots) => ParkingSpots.id === id);

//       if (ParkingSpotsIndex !== -1) {
//         // Create a copy of the 'posts' state array to avoid directly modifying state
//         const updatedSpots = [...ParkingSpots];

//         // Increment the likes count of the liked post
//         updatedPosts[postIndex].likes += 1;

//         // Update the 'posts' state with the updated array
//         setPosts(updatedParkingSpots);
//       }
//     } catch (error) {
//       console.log(error);
//       alert(
//         error.response?.data?.error || 'An error occurred while processing your request.'
//       );
//     }
//   };

//   const handleComment = async (id) => {
//     // Implement the comment functionality in a similar way to handleLike
//   };

//   const handleToggle = (data) => {
//     setTempPost(data);
//     setShowEditForm(!showEditForm);
//   };

//   return (
//     <div className="post_wrapper">
//       {posts.map((post) => (
//         <div className="card" key={Spots.id}>
//           <p>{post.Content}</p>
//           <div className="icons">
//             <div className='icons1'>
//               <AiFillLike
//                 className="delIcon"
//                 onClick={() => handleLikes(Spots.id)}
//               />{' '}
//               <p style={{ color: 'black', display: 'flex', justifyContent: 'start' }}>
//                 Like ({post.likes})
//               </p>
//             </div>
//             <div className='icons1'>
//               <FaRegCommentAlt
//                 className="delIcon"
//                 onClick={() => handleComment(post.id)}
//               />{' '}
//               <p style={{ color: 'black' }}>Comment ({post.comments})</p>
//             </div>
//             <AiFillEdit
//               className="delIcon"
//               onClick={() => handleToggle(post)}
//             />
//             {showEditForm && (
//               <UpdateForm
//                 setShowEditForm={setShowEditForm}
//                 ParkingSpots={ParkingSpots}
//                 getParkingSpots={getParkingSpots}
//               />
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Bookinglist;


import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/parkingContext/Context';
import { apidomain } from '../utils/domains.js';
import './bookinglist.css';

function Bookinglist() {
  const [parkingSpots, setParkingSpots] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    getParkingSpots();
  }, []);

  const getParkingSpots = async () => {
    try {
      const res = await axios.get(`${apidomain}/ParkingSpots`);
      setParkingSpots(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="parking_spots_wrapper">
      {parkingSpots.map((spot) => (
        <div className="card" key={spot.SpotID}>
          <p>Spot ID: {spot.SpotID}</p>
          <p>Spot Number: {spot.SpotNumber}</p>
          <p>Spot Type: {spot.SpotType}</p>
          <p>Availability: {spot.Availability}</p>
          <p>Floor: {spot.Floor}</p>
        </div>
      ))}
    </div>
  );
}

export default Bookinglist;
