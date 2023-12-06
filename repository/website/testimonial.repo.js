const db = require('../../models');


exports.insertTestimonialDetails = async (testimonialData) => {
    return new Promise(async (resolve, reject) => {
        db.testimonial
            .create(testimonialData)
            .then(testimonialDetail => {
                resolve(testimonialDetail);
            }).catch(error => {
                reject(error);
            });

    });

};

exports.updateTestimonialDetails = async (testimonialData) => {
    return new Promise(async (resolve, reject) => {
        db.testimonial
            .update(testimonialData, {
                where: {
                    testimonialId: testimonialData.testimonialId
                }
            }).then((testimonialDetail) => {
                resolve(testimonialDetail);
            }).catch(error => {
                reject(error);
            });
    });
};

exports.getTestimonialDetails = async (payload) => {
    return new Promise(async (resolve, reject) => {
            db.testimonial
            .findAndCountAll({
                attributes: ['testimonialId', 'testimonial', 'activeStatus']
            }).then((details) => {
                resolve(details);
            }).catch(error => {
                reject(error);
            });         
    });
};

exports.deleteTestimonialDetails = async (testimonialId) => {
    return new Promise(async (resolve, reject) => {
            db.testimonial.
            destroy({
                where: {
                    testimonialId: testimonialId
                }
            }).then((data)=> {
                resolve(data);
            }).catch(error => {
                reject(error);
            });   
    });
};