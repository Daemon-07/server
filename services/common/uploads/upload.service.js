const uploadService = require('../../../repository/common/upload/upload.repo');
const uploadFile = require('../../../Utils/fileUpload');

exports.singleFileUpload = function (req,res) {
    return new Promise(async function (resolve) {
            let outputResponse = {};
            try {
                    let uploadResponse = await uploadService.uploadImage(req.filePath);
                    let fileUpload=await uploadFile(req, res);
                
                    if (!uploadResponse.errorStatus  ) {
                            if (uploadResponse.data) {
                                    outputResponse.responseCode = 'UPLOAD_SUCCESS';
                                    outputResponse.statusCode = 200;
                                    outputResponse.status = true;
                                    outputResponse.message = uploadResponse.errorMessage;
                                    outputResponse.data = uploadResponse.data;
                            } else {
                                    outputResponse.responseCode = 'UPLOAD_FAILED';
                                    outputResponse.statusCode = 200;
                                    outputResponse.status = true;
                                    outputResponse.message = uploadResponse.errorMessage;
                                    outputResponse.data = {};
                            }
                    } else {
                            if(uploadResponse.errorCode=='NO_DATA_FOUND')
                            {
                                    outputResponse.responseCode = 'UPLOAD_FAILED';
                                    outputResponse.statusCode = 200;
                                    outputResponse.status = true;
                                    outputResponse.message = uploadResponse.errorMessage;
                                    outputResponse.data = {};    
                            }
                            else{
                                    outputResponse.responseCode = uploadResponse.errorCode;
                                    outputResponse.statusCode = 409;
                                    outputResponse.status = false;
                                    outputResponse.message = uploadResponse.errorMessage;
                                    outputResponse.data = {};
                            }
                            
                    }
                    resolve(outputResponse);
            } catch (error) {
                    outputResponse.status = false;
                    outputResponse.responseCode = 'UPLOAD_SERVICE_ERR';
                    outputResponse.statusCode = 500;
                    outputResponse.message = error.message;
                    outputResponse.data = {};
                    resolve(outputResponse);
            }
    });
};