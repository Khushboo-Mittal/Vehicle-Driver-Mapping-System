// // controllers/vehicleController.js
// const Vehicle = require('../models/Vehicle');

// exports.createVehicle = async (req, res) => {
//   try {
//     const vehicle = new Vehicle(req.body);
//     await vehicle.save();
//     res.status(201).json(vehicle);
//   } catch (error) {
//     res.status(400).json({ message: 'Error creating vehicle', error });
//   }
// };

// exports.getAllVehicles = async (req, res) => {
//   try {
//     const vehicles = await Vehicle.find();
//     res.status(200).json(vehicles);
//   } catch (error) {
//     res.status(400).json({ message: 'Error fetching vehicles', error });
//   }
// };

// exports.searchVehicles = async (req, res) => {
//   try {
//     const { make, model } = req.query;
//     const vehicles = await Vehicle.find({ make, model });
//     res.status(200).json(vehicles);
//   } catch (error) {
//     res.status(400).json({ message: 'Error searching vehicles', error });
//   }
// };

// exports.assignDriver = async (req, res) => {
//   try {
//     const vehicle = await Vehicle.findById(req.params.id);
//     vehicle.driverId = req.body.driverId;
//     await vehicle.save();
//     res.status(200).json(vehicle);
//   } catch (error) {
//     res.status(400).json({ message: 'Error assigning driver', error });
//   }
// };

// exports.unassignDriver = async (req, res) => {
//   try {
//     const vehicle = await Vehicle.findById(req.params.id);
//     vehicle.driverId = null;
//     await vehicle.save();
//     res.status(200).json(vehicle);
//   } catch (error) {
//     res.status(400).json({ message: 'Error unassigning driver', error });
//   }
// };


// const Vehicle = require('../models/Vehicle');

// exports.getAllVehicles = async (req, res) => {
//   try {
//     const vehicles = await Vehicle.find();
//     res.status(200).json(vehicles);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

const Vehicle = require('../models/Vehicle');

exports.createVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (error) {
    console.error('Error creating vehicle:', error); // Add logging for debugging
    res.status(400).json({ message: 'Error creating vehicle', error });
  }
};
