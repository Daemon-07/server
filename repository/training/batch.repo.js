const db = require("../../models");
const { Op } = require("sequelize");
exports.insertBatchDetail = async function (batchData) {
  return new Promise(async function (resolve, reject) {
    db.batch
      .create(batchData)
      .then((batchDetail) => {
        resolve(batchDetail);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};

exports.updateBatchData = async function (batchData) {
  return new Promise(async function (resolve, reject) {
    db.batch
      .update(batchData,{where: {
        batchId: batchData.batchId,
      }})
      .then((batchDetail) => {
        resolve(batchDetail);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};

exports.getBatchList = async function (trainingId) {
  return new Promise(async function (resolve, reject) {
    let where = { trainingId: trainingId };
    db.batch
      .findAndCountAll({
        where: where,
      })
      .then((countries) => {
        resolve(countries);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};
