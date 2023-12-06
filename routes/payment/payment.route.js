const express = require('express');
const router = express.Router();

const paymentController = require('../../controllers/payment/payment.controller');
const jwt_token = require('../../controllers/token/jwt_token');

router.post('/createOrder', jwt_token.authenticateToken, paymentController.createOrder);
router.post('/updateOrder', jwt_token.authenticateToken, paymentController.updateOrder);
module.exports = router;