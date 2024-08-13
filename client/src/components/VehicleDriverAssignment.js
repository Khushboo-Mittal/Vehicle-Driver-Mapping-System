import React, { useState, useEffect } from 'react';
import axios from '../api/axios';


const VehicleDriverAssignment = () => {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const driverResponse = await axios.get('http://localhost:5001/api/drivers');
        const vehicleResponse = await axios.get('http://localhost:5001/api/vehicles');
        setDrivers(driverResponse.data);
        setVehicles(vehicleResponse.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleAssign = async () => {
    try {
      await axios.put(`http://localhost:5001/api/drivers/${selectedDriver}/assignVehicle`, {
        vehicleId: selectedVehicle,
      });
      setSelectedDriver('');
      setSelectedVehicle('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnassign = async () => {
    try {
      await axios.put(`http://localhost:5001/api/drivers/${selectedDriver}/unassignVehicle`);
      setSelectedDriver('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Assign Vehicle to Driver</h2>
      <select value={selectedDriver} onChange={(e) => setSelectedDriver(e.target.value)}>
        <option value="">Select Driver</option>
        {drivers.map((driver) => (
          <option key={driver._id} value={driver._id}>
            {driver.name}
          </option>
        ))}
      </select>
      <select value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)}>
        <option value="">Select Vehicle</option>
        {vehicles.map((vehicle) => (
          <option key={vehicle._id} value={vehicle._id}>
            {vehicle.make} {vehicle.model}
          </option>
        ))}
      </select>
      <button onClick={handleAssign}>Assign</button>
      <button onClick={handleUnassign}>Unassign</button>
    </div>
  );
};

export default VehicleDriverAssignment;