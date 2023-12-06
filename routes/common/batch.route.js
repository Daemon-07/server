const express = require('express');
const router = express.Router();

const batchController = require('../../controllers/common/batch.controller');

const jwtToken= require('../../controllers/token/jwt_token');

// router.get('/get', batchController.getBatch);
router.get('/getall', batchController.getBatch);
router.post('/add',  batchController.addBatch);
// router.put('/update',  batchController.updateBatch);
// router.delete('/delete', jwtToken.authenticateToken, batchController.deleteBatch);

module.exports = router;