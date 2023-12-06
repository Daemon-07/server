const sendResponse = require('../../../functions/response');
const LocalityService = require('../../../services/common/location/locality.service');

exports.getLocality = async (req, res) => {
    try {
        if (req.body || req.query.localityId) {
            let responseData = await LocalityService.getLocality(req);
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

exports.addLocality = async (req, res) => {
    try {
        if (req.body.length > 0) {
            let responseData = await LocalityService.addLocality(req);
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


exports.updateLocality = async (req, res) => {
    try {
        if (req.body) {
            let responseData = await LocalityService.updateLocality(req);
            let response = {};
            if (!responseData) {
                response.statusCode = 409;
                response.responseCode = "DATA_NOT_UPDATED";
                response.message = "FAILED";
            } else {
                response.statusCode = 200;
                response.responseCode = "DATA_UPDATED_SUCCESSFULLY";
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

exports.deleteLocality = async (req, res) => {
    try {
        if (req.body) {
            let responseData = await LocalityService.deleteLocality(req);
            let response = {};
            if (!responseData) {
                response.statusCode = 409;
                response.responseCode = "DATA_NOT_DELETED";
                response.message = "FAILED";
            } else {
                response.statusCode = 200;
                response.responseCode = "DATA_DELETED_SUCCESSFULLY";
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