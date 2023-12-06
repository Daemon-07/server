const express = require('express');
const router = express.Router();

 const subCategoryController = require('../../controllers/common/category/subCategory.controller');
 const jwtToken= require('../../controllers/token/jwt_token');

// router.get('/get', domainController.getDomain);
router.get('/getall', subCategoryController.getsubCategory);
router.post('/add' ,subCategoryController.addsubCategory)
router.put('/update', subCategoryController.updatesubCategory)
router.delete('/delete', subCategoryController.deletesubCategory);
//  router.delete('/delete', jwtToken.authenticateToken, subCategoryController.deletesubCategory);
module.exports = router;