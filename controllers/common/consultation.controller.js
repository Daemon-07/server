const sendResponse = require('../../functions/response');
const consultationService = require('../../services/common/consultation.service');

exports.addConsultation = async (req, res) => {
  try {
    let apiResponse = {};
    let responseData = await consultationService.addConsultation(req);
    let response = {};
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "DATA_NOT_ADDED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "DATA_ADDED_SUCCESSFULLY";
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


exports.getConsultation = async (req, res) => {
  try {
    if (req.body || req.query.consultationId) {
      let responseData = await consultationService.getConsultation(req);
      let response = {};
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
  } catch (error) {
    res.send(error);
  }
};
