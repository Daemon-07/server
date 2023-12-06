const LanguageRepository = require('../../../repository/common/language/language.repo');

exports.addLanguage = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await LanguageRepository.insertLanguageData(req.body);
            resolve(responseData);
        } catch (error) {
            reject(error);
        };
    });
};

exports.updateLanguage = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await LanguageRepository.updateLanguageData(req.body);
            resolve(responseData);
        } catch (error) {
            reject(error);
        };
    });
};

exports.getLanguage = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await LanguageRepository.getLanguageData(req.query.languageId);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};

exports.deleteLanguage = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await LanguageRepository.deleteLanguageData(req.query.languageId);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};