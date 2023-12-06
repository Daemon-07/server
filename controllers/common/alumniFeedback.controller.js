const sendResponse = require('../../functions/response');
const alumniFeedbackService = require('../../services/common/alumniFeedback.service');

exports.getFeedback = async (req, res) => {
    try {
        if (req.body || req.query.feedbackId) {
            let responseData = await alumniFeedbackService.getFeedback(req);
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


exports.updateFeedback = async (req, res) => {
    try {
        if (req.body) {
            let responseData = await alumniFeedbackService.updateFeedback(req);
            let response = {};
            if (!responseData) {
                response.statusCode = 409;
                response.responseCode = "DATA_NOT_UPDATED";
                response.message = "FAILED";
            } else {
                response.statusCode = 200;
                response.responseCode = "DATA_UPDATED";
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

exports.deleteFeedback = async (req, res) => {
    try {
        if (req.body) {
            let responseData = await alumniFeedbackService.deleteFeedback(req);
            let response = {};
            if (!responseData) {
                response.statusCode = 409;
                response.responseCode = "DATA_NOT_DELETED";
                response.message = "FAILED";
            } else {
                response.statusCode = 200;
                response.responseCode = "DATA_DELETED";
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
