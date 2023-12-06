const sendResponse = require('../../../functions/response');
const cityService = require('../../../services/common/location/city.service');

exports.getCity = async (req, res) => {
    try {
        let responseData = await cityService.getCity(req);
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

exports.addCity = async (req, res) => {
    try {
        if (req.body.length > 0) {
            let responseData = await cityService.addCity(req);
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


exports.updateCity = async (req, res) => {
    try {
        console.log(req.body);
        if (req.body) {

            let responseData = await cityService.updateCity(req);
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

exports.deleteCity = async (req, res) => {
    try {
        if (req.body) {
            let responseData = await cityService.deleteCity(req);
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