const db = require('../../../models');
const {
    Op
} = require("sequelize");

exports.insertCountryData = async (countryData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.country.bulkCreate(countryData).then(countryDetail => {
                resolve(countryData);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};

exports.updateCountryData = async (countryData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.country.update(countryData, {
                where: {
                    countryId: countryData.countryId
                }
            }).then(countryDetail => {
                resolve(countryDetail);
            }).catch(error => {
               
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};

exports.getCountryData = async (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            let page=1;
            let limit=1;
            let offset=0;
            let where = {};
           
            if(payload.countryId){
                where = {countryId:payload.countryId};
            }
            
            db.country.findAndCountAll({
                attributes: ['countryId', 'countryName', 'countryCode',['activeStatus' , 'countryStatus']],
                where:where,
            }).then(countries => {
                resolve(countries);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.deleteCountryData = async (countryId) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.country.destroy({
                where: {
                    countryId: countryId
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