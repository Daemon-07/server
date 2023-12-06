const sendResponse = require('../../../functions/response');
const domainService = require('../../../services/common/domain/domain.service');


exports.getADomain = async (req, res) => {
  try {
    let responseData = await domainService.getDomain(req);
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
  catch (error) {
    res.send(error);
  }
};


exports.addDomain = async (req, res) => {
  try {
    let responseData = await domainService.addDomain(req, res);
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
  }
  catch (error) {
    res.send(error);
  }
};


exports.getDomain = async (req, res) => {
  try {
    let responseData = await domainService.getDomain(req);
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
  catch (error) {
    res.send(error);
  }
};


exports.updateDomain = async (req, res) => {

  try {
    if (req.body || req.query.DomainId) {
      let responseData = await domainService.updateDomain(req, res);
      let response = {};
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "DATA_NOT_UPDATED";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "DATA_UPDATED_SUCCESSFULLY";
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

exports.deleteDomain = async (req, res) => {
  try {
    if (req.body || req.query.DomainId) {
      let responseData = await domainService.deleteDomain(req);
      let response = {};
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "DATA_NOT_DELETED";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "DATA_DELETED_SUCCESSFULLY";
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
