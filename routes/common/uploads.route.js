const express = require('express');
const multer  = require('multer');
var path = require('path')
const router = express.Router();
const uploadController = require('../../controllers/common/uploads/singleImageUpload.controller');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-'+uniqueSuffix + path.extname(file.originalname))
      req.filePath=file.fieldname + '-'+uniqueSuffix + path.extname(file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })

const jwt_token= require('../../controllers/token/jwt_token');

router.post('/singleImage',  upload.single('photo'), uploadController.singleImageUpload);

module.exports = router;