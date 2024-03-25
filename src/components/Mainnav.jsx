import { useContext } from "react";
import { Context } from "../context/parkingContext/context";
import Home from "../pages/Home";
import Admin from "../components/Admin";
import Reports from "../components/Reports";
import Bookinglist from "../components/Bookinglist";
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import "./mainnav.css"
import Bookinglist from "./Bookinglist";
export default function Mainnav() {
  const { ui } = useContext(Context);
return (
  <div className='mainnav'>
      {
          ui == 'add' ? (
              <div className="mainnav_wrapper">
                  {/* <h2>Create Post</h2> */}
                  <Booking/>
              </div>
          ) : ui == 'view' ? (
            <div className="mainnav_wrapper" >
                {/* <h2>View All booked slots</h2> */}
                <Bookinglist/>
            </div>
        ):ui == 'Signup' ? (
            <div className="mainnav_wrapper" >
                {/* <h2>View All Post</h2> */}
                <Signup/>
            </div>
        ):ui == 'Admin' ? (
              <div className="mainnav_wrapper" >
                  {/* <h2>View All Post</h2> */}
                  <Admin />
              </div>
          ): ui == 'Payment' ? (
              <div className="mainnav_wrapper">
                  {/* <h2>User Profile</h2> */}
                  <Payment />
              </div>
          ):ui == 'About' ? (
            <div className="mainnav_wrapper">
                {/* <h2>User Profile</h2> */}
                <About />
            </div>
        ): null

      }
  </div>
);
}



