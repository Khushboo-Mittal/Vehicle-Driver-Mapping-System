import React, { useState, useEffect } from 'react';
import axios from '../api/axios';


const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/drivers');
        setDrivers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Drivers</h2>
      <ul>
        {drivers.map((driver) => (
          <li key={driver._id}>
            {driver.name} - {driver.phone} - {driver.vehicle ? `${driver.vehicle.make} ${driver.vehicle.model}` : 'No Vehicle'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;