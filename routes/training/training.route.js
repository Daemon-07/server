const express = require('express');
const router = express.Router();
const jwt_token= require('../../controllers/token/jwt_token');

const trainingController = require('../../controllers/training/training.controller');

router.get('/get', trainingController.getTrainingDetails);
router.get('/getall', trainingController.getTrainingDetails);
router.post('/add',  trainingController.addTrainingDetail);
router.get('/getallpurchasedcourses', jwt_token.authenticateToken, trainingController.getPurchasedTrainingDetails);

router.get('/admin/getall',jwt_token.authenticateToken,trainingController.getTrainingDetails);
router.get('/admin/get',jwt_token.authenticateToken,trainingController.getTrainingDetails);

router.get('/syllabus',trainingController.getTrainingSyllabus);
module.exports = router;