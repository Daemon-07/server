const db = require('../../models');
const {
    Op
} = require("sequelize");

exports.insertFeedbackData = async (feedbackData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.alumniFeedback.create(feedbackData).then(feedbackDetail => {
                resolve(feedbackDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.updateFeedbackData = async (feedbackData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.alumniFeedback.update(feedbackData, {
                where: {
                    feedbackId: feedbackData.feedbackId
                }
            }).then(feedbackDetail => {
                resolve(feedbackDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.getFeedbackData = async (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            let page=1;
            let limit=1;
            let offset=0;
            let where = {};
            if(payload.pagination)
            {
                page = payload.pagination.page; 
                limit = payload.pagination.limit;
                offset = limit * (page - 1);
                where = {activeStatus:1};
            }
            else{
                where = {feedbackId:payload};
            } offset = limit * (page - 1);
            
            db.alumniFeedback.findAndCountAll({
                attributes: ['feedbackId', 'alumniName','alumniPhoto','companyLogo','currentDesignation','rating','feedback'],
                where:where,
                limit: limit,
                offset: offset
            }).then(feedback => {
                resolve(feedback);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.deleteFeedbackData = async (feedbackId) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.alumniFeedback.destroy({
                where: {
                    feedbackId: feedbackId
                }
            }).then(num => {  
                resolve(num);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};