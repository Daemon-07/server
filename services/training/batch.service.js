

const batchRepository = require("../../repository/training/batch.repo");


exports.addBatchDetail = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(req.body);
      let responseData = await batchRepository.insertBatchDetail(req.body);
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.getBatchList = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await batchRepository.getBatchList(
        req.query.trainingId
      );
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.updateBatch = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await batchRepository.updateBatchData(req.body);
      resolve(responseData);
    } catch (error) {
      reject(error);
    }
  });
};