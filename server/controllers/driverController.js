const Driver = require('../models/Driver');
const Vehicle = require('../models/Vehicle');

exports.createDriver = async (req, res) => {
  try {
    const newDriver = new Driver(req.body);
    const savedDriver = await newDriver.save();
    res.status(201).json(savedDriver);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find().populate('vehicle');
    res.status(200).json(drivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.searchDrivers = async (req, res) => {
  try {
    const { name, phone } = req.query;
    const drivers = await Driver.find({
      $or: [{ name: { $regex: name, $options: 'i' } }, { phone: { $regex: phone, $options: 'i' } }],
    }).populate('vehicle');
    res.status(200).json(drivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.assignVehicle = async (req, res) => {
  try {
    const driverId = req.params.id;
    const vehicleId = req.body.vehicleId;

    // Check if the vehicle is already assigned
    const existingAssignment = await Driver.findOne({ vehicle: vehicleId });
    if (existingAssignment) {
      return res.status(400).json({ error: 'Vehicle already assigned to another driver' });
    }

    const driver = await Driver.findByIdAndUpdate(driverId, { vehicle: vehicleId }, { new: true }).populate('vehicle');
    res.status(200).json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.unassignVehicle = async (req, res) => {
  try {
    const driverId = req.params.id;
    const driver = await Driver.findByIdAndUpdate(driverId, { vehicle: null }, { new: true }).populate('vehicle');
    res.status(200).json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};