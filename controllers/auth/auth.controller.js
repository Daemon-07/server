const { sendErrorObj } = require('../../functions/error');
const sendResponse = require('../../functions/response');
const authService = require('../../services/auth/auth.service');

exports.authController = async (req, res) => {
  try {
    let responseData = await authService.userLogin(req);
    let response = {};
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "LOGIN_FAILED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "LOGIN_SUCCESS";
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

exports.forgotPassword = async (req, res) => {
  try {
    let responseData = await authService.forgotPassword(req);
    let response = {};
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "PASSWORD_RESET_LINK_NOT_SENT";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "PASSWORD_RESET_LINK_SENT";
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


exports.resetController = async (req, res) => {
  try {
    let responseData = await authService.resetPassword(req);
    let response = {};
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "PASSWORD_RESET_FAILED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "PASSWORD_RESET_SUCCESSFULLY";
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
