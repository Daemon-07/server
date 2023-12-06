const express = require('express');
const router = express.Router();

const countryController = require('../../controllers/common/location/country.controller');

const jwtToken= require('../../controllers/token/jwt_token');

router.get('/get', countryController.getCountry);
router.get('/getall', countryController.getCountry);
router.post('/add',  countryController.addCountry);
router.put('/update',  countryController.updateCountry);
router.delete('/delete', jwtToken.authenticateToken, countryController.deleteCountry);

module.exports = router;  