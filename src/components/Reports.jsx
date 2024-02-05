import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reports.css';

function Reports() {
  // State to store the fetched data
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the database
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint to fetch data from your database
        const response = await axios.get('http://localhost:3001/reports');
        setReportData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <div className='report'>
      <h2>Reports</h2>
      <ul  style={{margin:'10px',color:'black'}}>
        {/* Render each report item */}
        {reportData.map((reports, index) => (
          <li key={index}>{reports.name} - {reports.value}</li>
          // Adjust the property names based on your database structure
        ))}
      </ul>
    </div>
  );
}

export default Reports;
