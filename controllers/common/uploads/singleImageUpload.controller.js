const sendResponse = require('../../../functions/response');
const uploadService = require('../../../services/common/uploads/upload.service');

exports.singleImageUpload = async (req, res) => {
    try {
        if (req.body) {
            let responseData = await uploadService.singleFileUpload(req, res);
            if (!responseData) {
                response.statusCode = 409;
                response.responseCode = "IMAGE_NOT_UPLOADED";
                response.message = "FAILED";
            } else {
                response.statusCode = 200;
                response.responseCode = "IMAGE_UPLOADED_SUCCESSFULLY";
                response.message = "SUCCESS";
                response.data = responseData;
            }
            sendResponse.sendResponseObj(
                response.statusCode,
                response.responseCode,
                response.message,
                res,
                response.data
            );
        }
    } catch (error) {
        res.send(error);
    }
};
