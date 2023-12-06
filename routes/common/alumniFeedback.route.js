const express = require('express');
const router = express.Router();

const alumniFeedbackController = require('../../controllers/common/alumniFeedback.controller');

const jwt_token= require('../../controllers/token/jwt_token');

router.get('/get', alumniFeedbackController.getFeedback);
router.post('/getall', alumniFeedbackController.getFeedback);
// router.post('/add', alumniFeedbackController.addFeedback);
router.put('/update', alumniFeedbackController.updateFeedback);
router.delete('/delete', alumniFeedbackController.updateFeedback);

module.exports = router;