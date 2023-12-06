const expressConfig = require('../../config')();
const testimonialRepository = require('../../repository/website/testimonial.repo');
const Common = require('../../Utils/common');
const jwtToken = require("../../controllers/token/jwt_token");
var common = new Common();

exports.getTestimonialData = (req) => {
        return new Promise(async (resolve, reject) => {
                try {
                        let responseData = await testimonialRepository.getTestimonialDetails(req);
                        resolve(outputResponse);
                } catch (error) {
                        reject(error)
                };
        });
};

exports.addTestimonialData = (req) => {
        return new Promise(async (resolve) => {
                try {
                        let userResponse = await testimonialRepository.insertTestimonialDetails(req.body);
                        resolve(userResponse);
                } catch (error) {
                        reject(error)
                };
        });
};

exports.updateTestimonialData = (req) => {
        return new Promise(async (resolve) => {
                let userId = 0;
                try {
                        if (req.user) {
                                userId = req.user.userId;
                        }
                        else {
                                userId = req.body.userId;
                        }
                        let userResponse = await testimonialRepository.updateTestimonialDetails(req.body, userId);
                        resolve(userResponse);
                } catch (error) {
                        reject(error);
                }
        });
};

exports.deleteTestimonialData = (req) => {
        return new Promise(async (resolve) => {
                try {
                        let userResponse = await testimonialRepository.deleteTestimonialDetails(req.query.testimonialId);
                        resolve(userResponse);
                } catch (error) {
                        reject(error)
                };
        });
};



