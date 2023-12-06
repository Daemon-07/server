const db = require('../../../models');
const {
    Op
} = require("sequelize");
exports.insertStateData = async (stateData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.state.bulkCreate(stateData).then(stateDetail => {
                resolve(stateDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};

exports.updateStateData = async (stateData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.state.update(stateData, {
                where: {
                    stateId: stateData.stateId
                }
            }).then(stateDetail => {
                resolve(stateDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};

exports.getAllStates = async (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            let where = {};
            if (payload.countryId) {
                where = { countryId: payload.countryId };
            }
            db.state.findAndCountAll({
                attributes: ['stateId', 'stateName','activeStatus'],
                include: [{
                    model: db.country,
                    as: "country",
                    attributes: ['countryId', 'countryName', 'countryCode'],
                }],
                where: where,
            }).then(states => {
                resolve(states);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};

exports.deleteStateData = async (stateId) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.state.destroy({
                where: {
                    stateId: stateId
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