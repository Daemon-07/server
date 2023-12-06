const db = require('../../models');
const {
    Op
} = require("sequelize");
exports.insertConsultationData = async function (consultationData) {
    return new Promise(async function (resolve, reject) {
        let outputResponse = {};
            db.consultation.create(consultationData).then(consultationDetail => {
                resolve(outputResponse);
            }).catch(error => {
                resolve(error);
            });

    });

};

exports.updateConsultationData = async function (consultationData) {
    return new Promise(async function (resolve, reject) {

            db.consultation.update(consultationData, {
                where: {
                    consultationId: consultationData.consultationId
                }
            }).then(consultationDetail => {
                resolve(consultationDetail);
            }).catch(error => {
                resolve(error);
            });
        
    });

};

exports.getConsultationData = async function (payload) {

    return new Promise(async function (resolve, reject) {

            db.consultation.findAndCountAll({
                attributes: ['bookingId', 'studentName','studentEmail','studentMobile','lookingFor','note','activeStatus']
            }).then(consulations => {

                resolve(consulations);
            }).catch(error => {
                resolve(error);
            });
        
    });

};

exports.deleteConsultationData = async function (consultationId) {

    return new Promise(async function (resolve, reject) {

            db.consultation.destroy({
                where: {
                    consultationId: consultationId
                }
            }).then(num => {
                resolve(num);
            }).catch(error => {
                resolve(error);
            });

    });

};