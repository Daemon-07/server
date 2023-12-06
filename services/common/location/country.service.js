const jwtToken = require('../../../controllers/token/jwt_token');
const countryRepository = require('../../../repository/common/location/country.repo');

exports.addCountry = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await countryRepository.insertCountryData(req.body);
            resolve(responseData);
        }
        catch (error) {
            reject(error);
        };
    });
};

exports.updateCountry = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await countryRepository.updateCountryData(req.body);
            resolve(responseData);
        } catch (error) {
            reject(error);
        };
    });
};
exports.getCountry = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await countryRepository.getCountryData(req.query);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };

    });
};
exports.deleteCountry = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await countryRepository.deleteCountryData(req.query.countryId);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};