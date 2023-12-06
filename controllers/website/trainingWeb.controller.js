const sendResponse = require('../../functions/response');
const trainingService = require('../../services/training/training.service.js');
const syllabusService = require('../../services/training/syllabus.service.js');

exports.getTrainingDetails = async (req, res) => {
  try {
    let response = {};
    if (req.body || req.query.trainingId) {
      let responseData = await trainingService.getTrainingDetails(req, res);
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "TRAINING_DETAILS_NOT_FOUND";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "TRAINING_DETAILS_FOUND";
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
  } catch (error) {
    res.send(error);
  }
};


exports.getModuleList = async (req, res) => {
  try {
    let response = {};
    if (req.body || req.query.trainingId) {
      let responseData = await syllabusService.getModuleList(req, res);
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "MODULE_LIST_NOT_FOUND";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "MODULE_LIST_FOUND";
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
  } catch (error) {
    res.send(error);
  }
};

exports.addModuleDetail = async (req, res) => {
  try {
    let response = {};
    if (req.body) {
      let responseData = await syllabusService.addModuleDetail(req);
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "MODULE_ADDED_FAILED";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "MODULE_ADDED_SUCCESS";
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
  } catch (error) {
    res.send(error);
  }
};


exports.getModulesWithChapterList = async (req, res) => {
  try {
    let response = {};
    if (req.query.trainingId) {
      let responseData = await syllabusService.getModulesWithChapterList(req);
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "MODULE_WITH_CHAPTER_LIST_NOT_FOUND";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "MODULE_WITH_CHAPTER_LIST_FOUND";
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
  } catch (error) {
    res.send(error);
  }
};

exports.getChapterList = async (req, res) => {
  try {
    let response = {};
    if (req.query.moduleId) {
      let responseData = await syllabusService.getChapterList(req);
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "CHAPTER_LIST_NOT_FOUND";
        response.message = "FAILED";
    } else {
        response.statusCode = 200;
        response.responseCode = "CHAPTER_LIST_FOUND";
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
} catch (error) {
res.send(error);
}
};

