const sendResponse = require("../../functions/response");
const mentorService = require("../../services/website/mentors.service");

exports.updateMentor = async (req, res) => {
  try {
    
    let response = {};
    let responseData = await mentorService.updateMentorData(req);
    
    if (responseData) {
      response.statusCode = 200;
      response.responseCode = "MENTOR_UPDATED";
      response.message = "SUCCESS";
    } else {
      response.statusCode = 409;
      response.responseCode = "UPDATE_FAILED";
      response.message = "Somthing went wrong";
    }
    sendResponse.sendResponseObj(
      response.statusCode,
      response.responseCode,
      response.message,
      res,
      response.data
    );
  } catch (error) {
   
    res.send(error)
  }
};

exports.getMentorDetails = async (req, res) => {
  try {
    let response = {};
    let responseData = await mentorService.getMentorsData(req);

    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "MENTOR_NOT_FOUND";
      response.message = "CHECK_THE_REQUEST";
    } else {
      response.statusCode = 200;
      response.responseCode = "MENTOR_FOUND";
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

exports.getMentorFullDetails = async (req, res) => {
  try {
    let response = {};
    let responseData = await mentorService.getMentorFullData(req);
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "MENTOR_NOT_FOUND";
      response.message = "CHECK_THE_REQUEST";
    } else {
      response.statusCode = 200;
      response.responseCode = "MENTOR_FOUND";
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

exports.addMentor = async (req, res) => {
  try {
    let response = {};
    let responseData = await mentorService.addMentorData(req);

    if (responseData.name) {
      response.statusCode = 409;
      response.responseCode = responseData.name.toUpperCase();
      response.message = responseData.message;
    } else if (responseData.errors) {
      response.statusCode = 409;
      response.responseCode = responseData.errors[0].message;
      response.message = responseData.errors[0].type;
    } else {
      response.statusCode = 200;
      response.responseCode = "MENTOR_ADDED_SUCCESS";
      response.message = "Success";
    }

    sendResponse.sendResponseObj(
      response.statusCode,
      response.responseCode,
      response.message,
      res
    );
  } catch (error) {
    res.send(error);
  }
};

exports.deleteMentor = async (req, res) => {
  try {
    let response = {};
    let responseData = await mentorService.deleteMentorData(req);
    if (responseData == 1) {
      response.statusCode = 200;
      response.responseCode = "MENTOR_DELETED";
      response.message = "SUCCESS";
    } else {
      response.statusCode = 409;
      response.responseCode = "FAILED";
      response.message = "Something went wrong";
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
