const sendResponse = require('../../functions/response');
const contactService = require('../../services/contact/contact.service.js');

exports.getContactDetails = async (req, res) => {
    try {
        if (req.body || req.query.countryId) {
            let responseData = await contactService.getcontactDetails(req);
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
    } catch (error) {
        res.send(error);
    }
};

exports.addContactDetail = async (req, res) => {
    try {
        if (req.body.length > 0) {
            let responseData = await contactService.addContactDetail(req);
            let response = {};
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
    } catch (error) {
        res.send(error);
    }
};
