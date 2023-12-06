const sendResponse = require('../../../functions/response');
const categoryService = require('../../../services/common/category/category.service');

exports.addCategory = async (req, res) => {
  try {
    if (req.body) {
      let responseData = await categoryService.addCategory(req, res);
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
  }
  catch (error) {
    res.send(error);
  }
};

exports.getCategory = async (req, res) => {
  try {
    let responseData = await categoryService.getCategory(req);
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


exports.updateCategory = async (req, res) => {
  try {
    if (req.body || req.query.categoryId) {
      let responseData = await categoryService.updateCategory(req, res);
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
  }
  catch (error) {
    res.send(error);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    if (req.body || req.query.categoryId) {
      let responseData = await categoryService.deleteCategory(req);
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

