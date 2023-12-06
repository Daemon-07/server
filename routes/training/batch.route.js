const express = require('express');
const router = express.Router();
const jwt_token= require('../../controllers/token/jwt_token');

const batchController = require('../../controllers/training/batch.controller');

router.get('/get', batchController.getBatchDetails);
router.get('/getall', batchController.getBatchDetails);
router.post('/add',  batchController.addBatchDetail);
router.put('/update',  batchController.addBatchDetail);


module.exports = router;