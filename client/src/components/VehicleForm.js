// src/components/VehicleForm.js
import React, { useState } from 'react';
import axios from '../api/axios';

function VehicleForm() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/vehicles', { make, model, licensePlate });
      setResponse('Vehicle created successfully!');
      setMake('');
      setModel('');
      setLicensePlate('');
    } catch (error) {
      setResponse('Error creating vehicle');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <header className="flex flex-col items-center mb-4">
        <p className="text-2xl font-bold text-white">Create a New Vehicle</p>
      </header>
      <form className="bg-white/90 shadow-lg rounded-lg px-8 pt-6 pb-8 w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="make">
            Make
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="make"
            type="text"
            placeholder="Vehicle Make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
            Model
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="model"
            type="text"
            placeholder="Vehicle Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="licensePlate">
            License Plate
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="licensePlate"
            type="text"
            placeholder="License Plate"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Vehicle
          </button>
        </div>
        {response && <p className="mt-4 text-center text-green-500">{response}</p>}
      </form>
    </div>
  );
}

export default VehicleForm;