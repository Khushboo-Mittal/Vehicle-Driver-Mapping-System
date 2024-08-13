const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  licensePlate: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Vehicle', VehicleSchema);

// // routes/vehicle.js
// const express = require('express');
// const router = express.Router();
// const vehicleController = require('../controllers/vehicleController');

// // Create a vehicle
// router.post('/', vehicleController.createVehicle);

// // Get all vehicles
// router.get('/', vehicleController.getAllVehicles);

// // Search vehicles
// router.get('/search', vehicleController.searchVehicles);

// // Assign a driver to a vehicle
// router.put('/:id/assignDriver', vehicleController.assignDriver);

// // Unassign a driver from a vehicle
// router.put('/:id/unassignDriver', vehicleController.unassignDriver);

// module.exports = router;


// const mongoose = require('mongoose');

// const VehicleSchema = new mongoose.Schema({
//   make: { type: String, required: true },
//   model: { type: String, required: true },
//   licensePlate: { type: String, required: true, unique: true },
// });

// module.exports = mongoose.model('Vehicle', VehicleSchema);