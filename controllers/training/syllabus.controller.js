const sendResponse = require("../../functions/response");
const syllabusService = require("../../services/training/syllabus.service.js");

exports.getModuleList = async (req, res) => {
  try {
    let response = {};
    if (req.query.trainingId) {
      let responseData = await syllabusService.getModuleList(req);
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "MODULE_NOT_FOUND";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "MODULE_FOUND";
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

exports.addModuleDetail = async (req, res) => {
  try {
    let response = {};
    let responseData = await syllabusService.addModuleDetail(req);

    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "MODULE_NOT_ADDED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "MODULE_ADDED";
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

exports.updateModuleDetail = async (req, res) => {
  try {
    if (req.body) {
      let response = {};
      let responseData = await syllabusService.updateModuleDetail(req);
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "MODULE_NOT_UPDATED";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "MODULE_UPDATED";
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


exports.getModulesWithChapterList = async (req, res) => {
  try {
    if (req.query.trainingId) {
      let apiResponse = {};
      let responseData = await syllabusService.getModulesWithChapterList(req);
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "CHAPTER_NOT_FOUND";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "CHAPTER_FOUND";
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
}


exports.addChapterDetail = async (req, res) => {
  try {
    let response = {};
    let responseData = await syllabusService.addChapterDetail(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "CHAPTER_NOT_ADDED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "CHAPTER_ADDED_SUCCESSFULLY";
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
  }
  catch (error) {
    res.send(error);
  }
};

exports.updateChapterDetail = async (req, res) => {
  try {
    let response = {};
    let responseData = await syllabusService.updateChapter(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "CHAPTER_NOT_UPDATED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "CHAPTER_UPDATED_SUCCESSFULLY";
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
}

exports.getTopicsList = async (req, res) => {
  try {
    let response = {};
    let responseData = await syllabusService.getTopicsList(req);
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
  catch (error) {
    res.send(error);
  }
};

exports.getTopicDetail = async (req, res) => {
  try {
    let response = {};
    if (req.query.topicId) {
      let responseData = await syllabusService.getTopicDetail(req);

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

exports.addTopic = async (req, res) => {
  try {
    let response = {};
    let responseData = await syllabusService.addTopic(req, res);
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
  catch (error) {
    res.send(error);
  }
};

exports.updateTopic = async (req, res) => {
  try {
    let response = {};
    let responseData = await syllabusService.updateTopic(req, res);
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
  catch (error) {
    res.send(error);
  }
};