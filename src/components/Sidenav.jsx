import './Sidenav.css';
import { useContext } from 'react'
import { Context } from "../context/parkingContext/context";

export default function Sidenav() {
  const { dispatch } = useContext(Context);
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: 'add' })
}
const handleView = () => {
    dispatch({ type: "ADD", payload: 'view' })
}
  const handleHome = () => {
      dispatch({ type: "HOME", payload: 'Home' })
  }
  const handleAdmin = () => {
      dispatch({ type: "ADMIN", payload: 'Admin' })
  }
  const handleReports = () => {
      dispatch({ type: "REPORTS", payload: 'Reports' })
  }
  const handleTransaction = () => {
    dispatch({ type: "TRANSACTION", payload: 'Transaction' })
}
const handleLogin = () => {
  dispatch({ type: "LOGIN", payload: 'Login' })
}
  return (
    <div className='sidenav'>
      <div className="sidenav_wrapper">
        <div className="sidenav_title" onClick={handleAdd}>Signup</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_title" onClick={handleView}>Login</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_title" onClick={handleHome}>Home</div>
      </div>
      <div className="sidenav_wrapper">
       <div className="sidenav_item" onClick={handleAdmin}>Admin</div>
      </div>
      <div className="sidenav_wrapper">
       <div className="sidenav_item" onClick={handleReports}>Reports</div> 
      </div>
      <div className="sidenav_wrapper">
       <div className="sidenav_item" onClick={handleTransaction}>Transaction
       </div> 
      </div>
      
    </div>
  );
}
