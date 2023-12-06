const sendResponse = require("../../functions/response");
const topicService = require("../../services/training/topic.service.js");


exports.addTopicDetail = async (req, res) => {
  try {
    if (req.body) {
      let responseData = await topicService.addTopicDetail(req);
      let response = {};
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "TOPIC_NOT_ADDED";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "TOPIC_ADDED_SUCCESSFULLY";
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

exports.getTopicList = async (req, res) => {
  try {
    if (req.query.moduleId) {
      let responseData = await topicService.getTopicList(req);
      let response = {};
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "TOPIC_NOT_FOUND";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "TOPIC_FOUND";
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



exports.updateTopicDetail = async (req, res) => {
  try {
    if (req.body) {
      let responseData = await topicService.updateTopic(req, res);
      let response = {};
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "TOPIC_NOT_UPDATED";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "TOPIC_UPDATED_SUCCESSFULLY";
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