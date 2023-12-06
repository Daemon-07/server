const CityRepository = require("../../../repository/common/location/city.repo");

exports.addCity = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await CityRepository.insertCityData(req.body);
      resolve(responseData);
    } catch (error) {
      reject(error);
    }
  });
};

exports.updateCity = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await CityRepository.updateCityData(req.body);
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.getCity = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await CityRepository.getCityData(req);
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.deleteCity = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await CityRepository.deleteCityData(req.query.cityId);
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};
