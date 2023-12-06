const sendResponse = require("../../functions/response");
const userService = require("../../services/user/user.service");

exports.userRegistration = async (req, res) => {
  try {
    let response = {};
    let responseData = await userService.userRegistration(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "USER_NOT_REGISTERED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "USER_REGISTERED";
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

exports.updateUser = async (req, res) => {
  try {
    let response = {};
    let responseData = await userService.updateUserData(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "USER_NOT_UPDATED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "USER_UPDATED";
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

exports.getUserDetails = async (req, res) => {
  try {
    let response = {};
    let responseData = await userService.getUserDetails(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "USER_NOT_FOUND";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "USER_FOUND";
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

exports.verifyUserOtp = async (req, res) => {
  try {
    let apiResponse = {};
    let responseData = await userService.verifyUserOtp(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "USER_NOT_VERIFIED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "USER_VERIFIED";
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

exports.resendUserOtp = async (req, res) => {
  try {
    let apiResponse = {};
    let responseData = await userService.resendUserOtp(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "OTP_NOT_SENT";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "OTP_SENT_SUCCESSFULLY";
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

exports.changePassword = async (req, res) => {
  try {
    let response = {};
    let responseData = await userService.changePassword(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "PASSWORD_NOT_CHANGED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "PASSWORD_CHANGED_SUCCESSFULLY";
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

exports.deleteUser = async (req, res) => {
  try {
    let response = {};
    let responseData = await userService.deleteUser(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "USER_NOT_DELETED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "USER_DELETED_SUCCESSFULLY";
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
