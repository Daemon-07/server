const express = require('express');
const router = express.Router();

const languageController = require('../../controllers/common/language/language.controller');

const jwtToken= require('../../controllers/token/jwt_token');

// router.get('/get', languageController.getLanguage);
router.get('/getall', languageController.getLanguages);
router.post('/add',  languageController.addLanguage);
// router.put('/update',  languageController.updateLanguage);
// router.delete('/delete', jwtToken.authenticateToken, languageController.deleteLanguage);

module.exports = router;