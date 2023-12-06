const stateRepository = require("../../../repository/common/location/state.repo");

exports.addState = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let stateDetail = req.body;
      let responseData = await stateRepository.insertStateData(stateDetail);
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.updateState = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let stateDetail = req.body;
      let responseData = await stateRepository.updateStateData(stateDetail);
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.getAllStates = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      var responseData = await stateRepository.getAllStates(req.query);
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.deleteState = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let stateId = req.query.stateId;
      let responseData = await stateRepository.deleteStateData(stateId);
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};
