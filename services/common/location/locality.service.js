const LocalityRepository = require("../../../repository/common/location/locality.repo");

exports.addLocality = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await LocalityRepository.insertLocalityData(
        req.body
      );
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.updateLocality = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await LocalityRepository.updateLocalityData(
        req.body
      );
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.getLocality = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (req.query.localityId) {
        let responseData = await LocalityRepository.getLocalityData(
          req.query.localityId
        );
      } else {
        responseData = await LocalityRepository.getLocalityData(req.body);
      }
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.deleteLocality = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await LocalityRepository.deleteLocalityData(req.query.localityId);
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};
