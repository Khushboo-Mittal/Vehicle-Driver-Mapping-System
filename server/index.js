// index.js or app.js
const express = require('express');
const mongoose = require('mongoose');
const driverRoutes = require('./routes/driver');
const vehicleRoutes = require('./routes/vehicle');
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// Routes
app.use('/api/drivers', driverRoutes);
app.use('/api/vehicles', vehicleRoutes); // Vehicle routes registered here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const mongoose = require('mongoose');

// const VehicleSchema = new mongoose.Schema({
//   make: { type: String, required: true },
//   model: { type: String, required: true },
//   licensePlate: { type: String, required: true, unique: true },
// });

// module.exports = mongoose.model('Vehicle', VehicleSchema);