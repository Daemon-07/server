const sendResponse = require('../../../functions/response');
const languageService = require('../../../services/common/language/language.service');

exports.addLanguage = async (req, res) => {
    try {
        let response = {};
        let responseData = await languageService.addLanguage(req);
        if (!responseData) {
            response.statusCode = 409;
            response.responseCode = "DATA_NOT_ADDED";
            response.message = "FAILED";
        } else {
            response.statusCode = 200;
            response.responseCode = "DATA_ADDED_SUCCESSFULLY";
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
    catch (error) {
        res.send(error);
    }
};


exports.getLanguages = async (req, res) => {
    try {
        let responseData = await languageService.getLanguage(req);
        let response = {};
        if (!responseData) {
            response.statusCode = 409;
            response.responseCode = "DATA_NOT_FOUND";
            response.message = "FAILED";
        } else {
            response.statusCode = 200;
            response.responseCode = "DATA_FOUND";
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
    catch (error) {
        res.send(error);
    }
};
