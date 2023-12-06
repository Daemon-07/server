const express = require('express');
const router = express.Router();
 const categoryController = require('../../controllers/common/category/category.controller');
 const jwtToken= require('../../controllers/token/jwt_token');
 
router.get('/getall', categoryController.getCategory);
router.post('/add' ,categoryController.addCategory)
router.put('/update', categoryController.updateCategory)
router.delete('/delete', categoryController.deleteCategory);

module.exports = router;