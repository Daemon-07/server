const express = require('express');
const router = express.Router();
const stateController = require('../../controllers/common/location/state.controller');
const jwt_token= require('../../controllers/token/jwt_token');



router.get('/getall', stateController.getAllStates);
router.post('/add', stateController.addState);
router.put('/update', stateController.updateState);
router.delete('/delete', stateController.deleteState);

module.exports = router;