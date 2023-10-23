import { useContext } from "react";
import { Context } from "../context/parkingContext/context";
import Home from "../pages/Home";
import Admin from "./Admin";
import Reports from "./Reports";
import Transaction from "./Transaction";
import "./mainnav.css"
export default function Mainavbar() {
  const { ui } = useContext(Context);
  return (
    <div className="mainnav">
      {ui == "add" ? (
        <div className="mainnav_wrapper">
          {/* <h2>Create Post</h2> */}
          <Home />
        </div>
      ) : ui == "Admin" ? (
        <div className="mainnav_wrapper">
          {/* <h2>View All Post</h2> */}
          <Admin />
        </div>
      ) : ui == "Reports" ? (
        <div className="mainnav_wrapper1">
          {/* <h2>User Profile</h2> */}
          <Reports />
        </div>
      ) : ui == "Transaction" ? (
        <div className="mainnav_wrapper1">
          {/* <h2>User Profile</h2> */}
          <Transaction />
        </div>
      ) : null}
    </div>
  );
}
