const jwtToken = require('../../controllers/token/jwt_token');
const alumniFeedbackRepository = require('../../repository/common/alumniFeedback.repo');

exports.addFeedback = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await alumniFeedbackRepository.insertFeedbackData(req.body);
            resolve(responseData);
        } catch (error) {
            reject(error);
        };
    });
};

exports.updateFeedback = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await alumniFeedbackRepository.updateFeedbackData(req.body);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};

exports.getFeedback = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (req.query.feedbackId) {
                let responseData = await alumniFeedbackRepository.getFeedbackData(req.query.feedbackId);
            } else {
                responseData = await alumniFeedbackRepository.getFeedbackData(req.body);
            }
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};

exports.deleteFeedback = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await alumniFeedbackRepository.deleteFeedbackData(req.query.feedbackId);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};