const mentorsRepository = require("../../repository/website/mentors.repo");
const uploadFile = require("../../Utils/fileUpload");
const fs = require("fs-extra");

exports.getMentorsData = function (req) {
  return new Promise(async function (resolve, reject) {
    try{
    let responseData = await mentorsRepository.getMentorsDetails(req);
    resolve(responseData);
    }
    catch(error)
    {
      reject(error);
    }
  });
};

exports.getMentorFullData = function (req) {
  return new Promise(async function (resolve, reject) {
    try{
    let responseData = await mentorsRepository.getMentorsFullDetails(
      req.query.mentorId
    );
    resolve(responseData);
    }
    catch(error)
    {
      reject(error);
    }
  });
};
exports.addMentorData = async function (req, res) {
  return new Promise(async function (resolve, reject) {
    let mentorDetails = req.body;

    try {
      let fileUpload = await uploadFile(req, res);

      if (req.filePath) {
        mentorDetails = req.body;

        delete mentorDetails["photo"];
        mentorDetails.mentorProfileImage = "/images/" + req.filePath;
        mentorDetails.mentorId = parseInt(mentorDetails.mentorId);
        mentorDetails.activeStatus = parseInt(mentorDetails.activeStatus);
        mentorDetails.createdBy = req.user.userId;

        let responseData = await mentorsRepository.insertMentorDetails(
          mentorDetails
        );
        resolve(responseData);
      }
    } catch (error) {
      reject(error);
    }
  });
};

exports.updateMentorData = async function (req, res) {
  return new Promise(async function (resolve, reject) {
try{
    let fileUpload = await uploadFile(req, res);

    let mentorDetails = req.body;

    delete mentorDetails["photo"];
    if (req.filePath) {
      let mentorProfileImageURL = mentorDetails.mentorProfileImage.replace(
        "/images",
        "./uploads"
      );
      fs.remove(mentorProfileImageURL, (err) => {
        if (err) throw err;
        console.log("successfully deleted /tmp/hello");
      });
      mentorDetails.mentorProfileImage = "/images/" + req.filePath;
    }
    mentorDetails.mentorId = parseInt(mentorDetails.mentorId);
    mentorDetails.activeStatus = parseInt(mentorDetails.activeStatus);
    mentorDetails.updatedBy = req.user.userId;

    let responseData = await mentorsRepository.updateMentorDetails(mentorDetails);
    
    resolve(responseData);
  }
  catch(error)
  {
    reject(error);
  }
  });
};

exports.deleteMentorData = function (req, res) {
  return new Promise(async function (resolve) {
    try {
      let fileUpload = await uploadFile(req, res);
      mentorDetails = req.body;
      mentorDetails.mentorId = parseInt(mentorDetails.mentorId);
      mentorDetails.deletedBy = req.user.userId;

      let updateStatus = await mentorsRepository.updateMentorDetails(
        mentorDetails
      );
      if (updateStatus[0] == 1) {
        
        let mentorProfileImageURL = mentorDetails.mentorProfileImage.replace(
          "/images",
          "./uploads"
        );
        fs.remove(mentorProfileImageURL, (err) => {
          if (err) throw err;
          console.log("successfully deleted /tmp/hello");
        });

        let userResponse = await mentorsRepository.deleteMentorDetails(
          mentorDetails
        );
       
        resolve(userResponse);
      }
    } catch (error) {
      reject(error);
    }
  });
};
