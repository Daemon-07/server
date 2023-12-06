const db = require('../../../models');
const {
    Op
} = require("sequelize");

exports.insertLanguageData = async (languageData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.language.create(languageData).then(languageDetail => {

                resolve(languageDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
           reject(error);
        }
    });
};

exports.updateLanguageData = async (languageData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.language.update(languageData, {
                where: {
                    languageId: languageData.languageId
                }
            }).then(languageDetail => {
                resolve(languageDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.getLanguageData = async (payload) => {
    return new Promise(async (resolve, reject) => {
        let outputResponse = {};
        try { 
            db.language.findAndCountAll({
                attributes: ['languageId', 'languageName'],
            }).then(languages => {

                resolve(languages);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.deleteLanguageData = async (languageId) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.language.destroy({
                where: {
                    languageId: languageId
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