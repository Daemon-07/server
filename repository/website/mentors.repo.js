const db = require("../../models");

exports.insertMentorDetails = async function (mentorData) {
  return new Promise(async function (resolve, reject) {
    db.mentors
      .create(mentorData)
      .then((mentorDetail) => {
        resolve(mentorDetail);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.updateMentorDetails = async function (mentorData) {
  return new Promise(async function (resolve, reject) {
    db.mentors
      .update(mentorData, {
        where: {
          mentorId: mentorData.mentorId,
        },
      })
      .then((mentorDetail) => {
        resolve(mentorDetail);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.getMentorsDetails = async function (payload) {
  return new Promise(async function (resolve, reject) {
    db.mentors
      .findAndCountAll({
        attributes: [
          "mentorId",
          "mentorName",
          "mentorDesignation",
          "mentorProfileImage",
          "aboutMentor",
          "linkedlnId",
          "currentCompany",
          "previousCompany",
          "others",
          "activeStatus",
        ],
      })
      .then((dbdata) => {
        resolve(dbdata);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.getMentorsFullDetails = async function (mentorId) {
  return new Promise(async function (resolve, reject) {
    db.mentors
      .findOne({
        where: {
          mentorId: mentorId,
        },
        attributes: [
          "mentorId",
          "mentorName",
          "mentorMobileNumber",
          "mentorEmailId",
          "mentorDesignation",
          "mentorProfileImage",
          "aboutMentor",
          "linkedlnId",
          "currentCompany",
          "previousCompany",
          "mediaLinks",
          "others",
          "activeStatus",
        ],
      })
      .then((dbdata) => {
        resolve(dbdata);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.deleteMentorDetails = async function (mentorDetails) {
  return new Promise(async function (resolve, reject) {
    db.mentors
      .destroy({
        where: {
          mentorId: mentorDetails.mentorId,
        },
      })
      .then((num) => {
        resolve(num);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
