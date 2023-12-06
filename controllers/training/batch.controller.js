const sendResponse = require("../../functions/response");
const batchService = require("../../services/training/batch.service.js");

exports.addBatchDetail = async (req, res) => {
  try {
    if (req.body) {
      let responseData = await batchService.addBatchDetail(req);
      let response = {};
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "BATCH_NOT_ADDED";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "BATCH_ADDED";
        response.message = "SUCCESS";
        response.data = responseData;
      }
      sendResponse.sendResponseObj(
        response.statusCode,
        response.responseCode,
        response.message,
        res,
        response.data
      );
    }
  }
  catch (error) {
    res.send(error);
  }
};

exports.getBatchDetails = async (req, res) => {
  try {
    if (req.query.trainingId) {
      let response = {};
      let responseData = await batchService.getBatchList(req);
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "BATCH_NOT_FOUND";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "BATCH_FOUND";
        response.message = "SUCCESS";
        response.data = responseData;
      }
      sendResponse.sendResponseObj(
        response.statusCode,
        response.responseCode,
        response.message,
        res,
        response.data
      );
    }
  }
  catch (error) {
    res.send(error);
  }
};



exports.updateBatchDetail = async (req, res) => {
  try {
    if (req.body) {
      let responseData = await batchService.updateBatch(req, res);
      let response = {};
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "BATCH_NOT_UPDATED";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "BATCH_UPDATED";
        response.message = "SUCCESS";
        response.data = responseData;
      }
      sendResponse.sendResponseObj(
        response.statusCode,
        response.responseCode,
        response.message,
        res,
        response.data
      );
    }
  }
  catch (error) {
    res.send(error);
  }
};