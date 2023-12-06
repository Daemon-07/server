const db = require('../../models');
const {
    Op
} = require("sequelize");
exports.insertBatchData = async function (batchData) {
    return new Promise(async function (resolve, reject) {
        let outputResponse = {};
        try {
            db.batch.create(batchData).then(batchDetail => {
                resolve(batchDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            resolve(error);
        }
    });

};

exports.updateBatchData = async function (batchData) {
    return new Promise(async function (resolve, reject) {
        let outputResponse = {};
        try {
            db.batch.update(batchData, {
                where: {
                    batchId: batchData.batchId
                }
            }).then(batchDetail => {
                resolve(batchDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            resolve(error);
        }
    });

};

exports.getBatchData = async function (payload) {

    return new Promise(async function (resolve, reject) {
        let outputResponse = {};
        try {
            db.batch.findAndCountAll({
                attributes: ['batchId', 'batchDate']
            }).then(cities => {
                resolve(cities);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            resolve(error);
        }
    });

};

exports.deleteBatchData = async function (batchId) {

    return new Promise(async function (resolve, reject) {
        let outputResponse = {};
        try {
            db.batch.destroy({
                where: {
                    batchId: batchId
                }
            }).then(num => {
                resolve(num);
            }).catch(error => {
               
                resolve(error);
            });
        } catch (error) {
            resolve(error);
        }
    });

};