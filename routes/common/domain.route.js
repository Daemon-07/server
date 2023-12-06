const express = require('express');
const router = express.Router();

const domainController = require('../../controllers/common/domain/domain.controller');

const jwtToken= require('../../controllers/token/jwt_token');

// router.get('/get', domainController.getDomain);
router.get('/getall', domainController.getDomain);
router.get('/get', domainController.getADomain);
router.post('/add',  domainController.addDomain);
router.put('/update',  domainController.updateDomain);
// router.put('/update',  domainController.updateDomain);
 router.delete('/delete', jwtToken.authenticateToken, domainController.deleteDomain);

module.exports = router;