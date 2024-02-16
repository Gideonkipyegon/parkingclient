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
  return (
    <div className='sidenav'>
      <h1 style={{marginLeft:'20px',textDecoration:"underline"}}>Dashboard</h1>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handleAdmin}>Admin</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handleAdd}>Signup</div>
      </div>
      <div className="sidenav_wrapper">
        <div className="sidenav_item" onClick={handleHome}>Home</div>
      </div>
    </div>
  );
}