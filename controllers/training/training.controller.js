const sendResponse = require("../../functions/response");
const trainingService = require("../../services/training/training.service.js");



exports.getTrainingDetails = async (req, res) => {
  try {
    let response = {};
    let responseData;
    if (req.user.role == 3) {
      responseData = await trainingService.getTrainingDetailsForAdmin(req, res);
    }
    else {
      responseData = await trainingService.getTrainingDetails(req, res);
    }

    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "TRAINING_NOT_FOUND";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "TRAINING_FOUND";
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
  catch (error) {
    res.send(error);
  }
};

exports.addTrainingDetail = async (req, res) => {
  try {
    let response = {};
    let responseData = await trainingService.addTrainingDetail(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "TRAINING_NOT_ADDED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "TRAINING_ADDED_SUCCESSFULLY";
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
  catch (error) {
    res.send(error);
  }
};

exports.getPurchasedTrainingDetails = async (req, res) => {
  try {
    if (req.user) {
      let apiResponse = {};
      let responseData = await trainingService.getPurchasedTrainingDetails(req);
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "TRAINING_NOT_FOUND";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "TRAINING_FOUND";
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



exports.getTrainingSyllabus = async (req, res) => {
  try {
    let response = {};
    if (req.query.trainingId) {
      let responseData = await trainingService.getTrainingSyllabus(req);
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "SYLLABUS_NOT_FOUND";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "SYLLABUS_FOUND";
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
