const express = require('express');
const router = express.Router();

const localityController = require('../../controllers/common/location/locality.controller');

const jwt_token= require('../../controllers/token/jwt_token');

router.get('/get', localityController.getLocality);
router.post('/getall', localityController.getLocality);
router.post('/add', localityController.addLocality);
router.put('/update', localityController.updateLocality);
router.delete('/delete', localityController.deleteLocality);

module.exports = router;