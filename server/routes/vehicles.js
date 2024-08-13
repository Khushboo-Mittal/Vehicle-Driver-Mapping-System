const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/', vehicleController.createVehicle); // Ensure this matches your controller method
router.get('/', vehicleController.getAllVehicles);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const vehicleController = require('../controllers/vehicleController');

// router.get('/', vehicleController.getAllVehicles);

// module.exports = router;