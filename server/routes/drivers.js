const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

router.post('/', driverController.createDriver);
router.get('/', driverController.getAllDrivers);
router.get('/search', driverController.searchDrivers);
router.put('/:id/assignVehicle', driverController.assignVehicle);
router.put('/:id/unassignVehicle', driverController.unassignVehicle);

module.exports = router;