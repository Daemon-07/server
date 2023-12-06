const express = require('express');
const router = express.Router();

const auth = require('../../controllers/auth/auth.controller');

const jwt_token= require('../../controllers/token/jwt_token');
const { validateLogin } = require('../../validators/auth.validator');

//sample get request to check api working
router.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.json({ message: "It's working" });
});

//----------admin controller post routes--------------//

router.post('/login', validateLogin, auth.authController);
router.post('/forgot', auth.forgotPassword);
router.post('/resetpassword',auth.resetController);

//----------admin controller get routes--------------//


module.exports = router;