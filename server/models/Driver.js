const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  location: { type: String },
  workHours: { type: String },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', default: null },
});

module.exports = mongoose.model('Driver', DriverSchema);