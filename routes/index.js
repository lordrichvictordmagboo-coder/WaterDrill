// API ENDPOINTS
const express = require('express'); //framework API
const router = express.Router();
const userController = require('../controllers/userController');


//endpoints to handle employees data retrival
router.get('/users', userController.getAllUsers);
router.post('/water-bills', userController.postwaterBill);
router.put('/water-bills/:id', userController.putwaterBill);

module.exports = router;
