const util = require("util");
const multer = require("multer");
var path = require('path');
const maxSize = 2 * 1024 * 1024;

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

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("photo");
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;