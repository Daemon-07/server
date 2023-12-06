const express = require('express');
const router = express.Router();

const consultationController = require('../../controllers/common/consultation.controller');

const jwtToken= require('../../controllers/token/jwt_token');

// router.get('/get', consultationController.getConsultation);
router.get('/getall', consultationController.getConsultation);
router.post('/book',  consultationController.addConsultation);
// router.put('/update',  consultationController.updateConsultation);
// router.delete('/delete', jwtToken.authenticateToken, consultationController.deleteConsultation);

module.exports = router;