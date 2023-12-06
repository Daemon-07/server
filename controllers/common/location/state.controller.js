const sendResponse = require('../../../functions/response');
const stateService = require('../../../services/common/location/state.service');


exports.getAllStates = async (req, res) => {
    try {
        if (req.query) {
            let responseData = await stateService.getAllStates(req);
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
exports.addState = async (req, res) => {
    try {
        if (req.body.length > 0) {
            let responseData = await stateService.addState(req);
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


exports.updateState = async (req, res) => {
    try {
        if (req.body) {
            let responseData = await stateService.updateState(req);
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

exports.deleteState = async (req, res) => {
    try {
        if (req.body) {
            let responseData = await stateService.deleteState(req);
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