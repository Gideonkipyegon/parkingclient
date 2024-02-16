import { useContext } from "react";
import { Context } from "../context/parkingContext/context";
import Home from "../pages/Home";
import Admin from "../components/Admin";
import Reports from "../components/Reports";
import Transaction from "../components/Transaction";
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import "./mainnav.css"
// import AdminLogin from "./Admin";
export default function Mainnav() {
  const { ui } = useContext(Context);
return (
  <div className='mainnav'>
      {
          ui == 'add' ? (
              <div className="mainnav_wrapper">
                  {/* <h2>Create Post</h2> */}
                  <Signup />
              </div>
          ) : ui == 'Home' ? (
              <div className="mainnav_wrapper" >
                  {/* <h2>View All Post</h2> */}
                  <Home />
              </div>
          ): ui == 'Admin' ? (
              <div className="mainnav_wrapper1">
                  {/* <h2>User Profile</h2> */}
                  <Admin />
              </div>
          ): null

      }
  </div>
);
}



