import './Sidenav.css';
import { useContext } from 'react'
import { Context } from "../context/parkingContext/context";

export default function Sidenav() {
  const { dispatch } = useContext(Context);
  const handleHome = () => {
      dispatch({ type: "HOME", payload: 'Home' })
  }
  const handleAdmin = () => {
      dispatch({ type: "ADMIN", payload: 'Admin' })
  }
  const handleReports = () => {
      dispatch({ type: "REPORTS", payload: 'Reports' })
  }
  const handleTransactions = () => {
    dispatch({ type: "TRANSACTION", payload: 'Transaction' })
}
const handleLogin = () => {
  dispatch({ type: "LOGIN", payload: 'Login' })
}
  return (
    <div className='sidenav'>
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
      <div className="sidenav_item" onClick={handleTransactions}>Transactions</div> 
      </div>
      
    </div>
  );
}
