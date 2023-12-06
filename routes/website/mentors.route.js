const express = require('express');
const router = express.Router();

const mentorsController = require('../../controllers/website/mentors.controller');
const jwt_token= require('../../controllers/token/jwt_token');

router.get('/getall',mentorsController.getMentorDetails);
router.get('/getdetails',jwt_token.authenticateToken, mentorsController.getMentorFullDetails);
router.post('/delete', jwt_token.authenticateToken, mentorsController.deleteMentor);
router.post('/add',jwt_token.authenticateToken, mentorsController.addMentor);
router.put('/update', jwt_token.authenticateToken,mentorsController.updateMentor);

module.exports = router;