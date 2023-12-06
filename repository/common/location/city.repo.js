const db = require('../../../models');
const {
    Op
} = require("sequelize");

exports.insertCityData = async function (cityData) {
    return new Promise(async function (resolve, reject) {
        try {
            db.city.bulkCreate(cityData).then(cityDetail => {
                resolve(cityDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.updateCityData = async function (cityData) {
    return new Promise(async function (resolve, reject) {
        try {
            db.city.update(cityData, {
                where: {
                    cityId: cityData.cityId
                }
            }).then(cityDetail => {
                resolve(cityDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.getCityData = async function (payload) {
    return new Promise(async function (resolve, reject) {
        try {
            let where = {};
            if (payload.query.stateId) {
                where = { stateId: payload.query.stateId };
            }
            db.city.findAndCountAll({
                attributes: ['cityId', 'cityName', 'activeStatus'],
                include: [{
                    model: db.state,
                    as: "state",
                    attributes: ['stateId', 'stateName', 'stateCode', 'activeStatus'],
                }],
                where: where
            }).then(cities => {
                resolve(cities);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.deleteCityData = async function (cityId) {
    return new Promise(async function (resolve, reject) {
        try {
            db.city.destroy({
                where: {
                    cityId: cityId
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