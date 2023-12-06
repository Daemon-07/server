const sendResponse = require("../../functions/response");
const studentSyllabusService = require("../../services/student/student-syllabus.service");

exports.getAllModuleWithChapter = async (req, res) => {
  try {
    let response = {};
    let responseData = await studentSyllabusService.getAllModuleWithChapter(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "DATA_NOT_FOUND";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "DATA_FOUND";
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

exports.getAllTopicsByChapter = async (req, res) => {
    try {
      let response = {};
      let responseData = await studentSyllabusService.getAllTopicsByChapter(req);
  
      if (!responseData) {
          response.statusCode = 409;
          response.responseCode = "DATA_NOT_FOUND";
          response.message = "FAILED";
        } else {
          response.statusCode = 200;
          response.responseCode = "DATA_FOUND";
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
    } catch (error) {
      res.send(error);
    }
  };





  exports.getTopicViewById = async (req, res) => {
    try {
      let response = {};
      let responseData = await studentSyllabusService.getTopicViewById(req);
  
      if (!responseData) {
          response.statusCode = 409;
          response.responseCode = "DATA_NOT_FOUND";
          response.message = "FAILED";
        } else {
          response.statusCode = 200;
          response.responseCode = "DATA_FOUND";
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
    } catch (error) {
      res.send(error);
    }
  };