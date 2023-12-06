const sendResponse = require('../../functions/response');
const testimonialService = require('../../services/website/testimonial.service');

exports.updateTestimonial = async (req, res) => {
    try {
        let response = {};
        let responseData = await testimonialService.updateTestimonialData(req);
        if (!responseData) {
            response.statusCode = 409;
            response.responseCode = "TESTIMONIAL_NOT_UPDATED";
            response.message = "FAILED";
        } else {
            response.statusCode = 200;
            response.responseCode = "TESTIMONIAL_UPDATED";
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

exports.getTestimonial = async (req, res) => {
    try {
        let response = {};
        if (req.body) {
            let responseData = await testimonialService.getTestimonialData(req);
            if (!responseData) {
                response.statusCode = 409;
                response.responseCode = "TESTIMONIAL_NOT_FOUND";
                response.message = "FAILED";
            } else {
                response.statusCode = 200;
                response.responseCode = "TESTIMONIAL_FOUND";
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

exports.addTestimonial = async (req, res) => {
    try {
        let response = {};
        if (req.body) {
            let responseData = await testimonialService.addTestimonialData(req);
            if (!responseData) {
                response.statusCode = 409;
                response.responseCode = "TESTIMONIAL_ADDED_FAILED";
                response.message = "FAILED";
            } else {
                response.statusCode = 200;
                response.responseCode = "TESTIMONIAL_ADDED_SUCCESS";
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

exports.deleteTestimonial = async (req, res) => {
    try {
        let response = {};
        if (req.body) {
            let responseData = await testimonialService.deleteTestimonialData(req);
            if (!responseData) {
                response.statusCode = 409;
                response.responseCode = "DELETION_FAILED";
                response.message = "FAILED";
            } else {
                response.statusCode = 200;
                response.responseCode = "DELETED_SUCCESSFULLY";
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