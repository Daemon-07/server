const db = require('../../../models');
const {
    Op
} = require("sequelize");



exports.uploadImage =  function (filePath) {

    return new Promise(async function (resolve, reject) {
      let outputResponse = {};
      try {
        db.image
          .create({'imagePath':filePath})
          .then((image) => {
            outputResponse.errorStatus = false;
                outputResponse.errorCode = 'UPLOAD_SUCCESS';
                outputResponse.errorMessage = 'Uploaded Successfully';
                outputResponse.data = image;
                resolve(outputResponse);
           resolve(outputResponse);
          })
          .catch((error) => {
            // console.log(error);
            outputResponse.errorStatus = true;
            if (error.code) {
              outputResponse.errorCode = error.code;
            } else {
              outputResponse.errorCode = "DB_ERROR".error;
            }
            outputResponse.errorMessage = error.message;
            outputResponse.data = {};
            resolve(outputResponse);
          });
      } catch (error) {
        outputResponse.errorStatus = true;
        outputResponse.errorCode = error.code;
        outputResponse.errorMessage = error.message;
        outputResponse.data = {};
        resolve(outputResponse);
      }
    });
  };