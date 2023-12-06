const express = require('express');
const router = express.Router();

const cityController = require('../../controllers/common/location/city.controller');

const jwt_token= require('../../controllers/token/jwt_token');


router.get('/getall', cityController.getCity);
router.post('/add', cityController.addCity);
router.put('/update', cityController.updateCity);
router.delete('/delete', cityController.deleteCity);

module.exports = router;