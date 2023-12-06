const db = require('../../../models');
const {
    Op
} = require("sequelize");

exports.insertLocalityData = async (localityData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.locality.bulkCreate(localityData).then(localityDetail => {
                resolve(localityData);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};

exports.updateLocalityData = async (localityData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.locality.update(localityData, {
                where: {
                    localityId: localityData.localityId
                }
            }).then(localityDetail => {
                resolve(localityDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};

exports.getLocalityData = async (payload) => {
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
                where ={cityId:payload.cityId};
            }
            else{
                where = {localityId:payload};
            }
            
            db.locality.findAndCountAll({
                attributes: ['localityId', 'localityName'],
                include: [{
                    model: db.city,
                    as: "city",
                    attributes: ['cityId', 'cityName', 'activeStatus'],
                    include: [{
                        model: db.state,
                        attributes: ['stateId', 'stateName', 'stateCode'],
                    }]
                }],
                where:where,
                limit: limit,
                offset: offset
            }).then(locality => {

                resolve(locality);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};

exports.deleteLocalityData = async (localityId) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.locality.destroy({
                where: {
                    localityId: localityId
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