const sendResponse = require('../../../functions/response');
const subCategoryService = require('../../../services/common/category/subCategory.service');


exports.addsubCategory = async (req, res) => {
    try {
        if (req.body) {
            let responseData = await subCategoryService.addsubCategory(req, res);
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
    }
    catch (error) {
        res.send(error);
    }
};


exports.getsubCategory = async (req, res) => {
    try {
        let responseData = await subCategoryService.getsubCategory(req);
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

exports.updatesubCategory = async (req, res) => {
    try {
        if (req.body || req.query.subCategoryId) {
            let responseData = await subCategoryService.updatesubCategory(req);
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
    }
    catch (error) {
        res.send(error);
    }
};

exports.deletesubCategory = async (req, res) => {
    try {
        if (req.body || req.query.subCategoryId) {
            let responseData = await subCategoryService.deletesubCategory(req);
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
    }
    catch (error) {
        res.send(error);
    }
};

