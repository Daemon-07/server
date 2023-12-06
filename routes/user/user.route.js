const express = require('express');
const router = express.Router();

const userController = require('../../controllers/user/user.controller');

const jwt_token= require('../../controllers/token/jwt_token');

router.post('/register', userController.userRegistration);
router.put('/update',jwt_token.authenticateToken, userController.updateUser);
router.post('/verifyotp', jwt_token.authenticateToken,userController.verifyUserOtp);
router.post('/resendotp', userController.resendUserOtp);
router.put('/changepassword', userController.changePassword);

router.get('/get',userController.getUserDetails);
router.get('/getbytoken',jwt_token.authenticateToken, userController.getUserDetails);
router.delete('/delete', userController.deleteUser);


module.exports = router;