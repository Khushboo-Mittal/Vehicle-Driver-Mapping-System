import React, { useState } from 'react';
import axios from '../api/axios';


const DriverForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [workHours, setWorkHours] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/drivers', {
        name,
        email,
        phone,
        location,
        workHours,
      });
      setName('');
      setEmail('');
      setPhone('');
      setLocation('');
      setWorkHours('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="text" placeholder="Work Hours" value={workHours} onChange={(e) => setWorkHours(e.target.value)} />
      <button type="submit">Create Driver</button>
    </form>
  );
};

export default DriverForm;