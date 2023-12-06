const db = require("../../models");
const { Op } = require("sequelize");

exports.getAllModuleWithChapter = async (trainingId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let where = { trainingId: trainingId };
      db.module
        .findAndCountAll({
          attributes: ["moduleId", "moduleName"],
          include: [
            {
              model: db.chapter,
              as: "chapter",
              attributes: ["chapterId", "chapterName"],
            }],
          where: where,
        })
        .then((syllabusDetail) => {
          resolve(syllabusDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};


exports.getAllTopicsByChapter = async (chapterId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let where = { chapterId: chapterId };
      db.topic
        .findAndCountAll({
          attributes: ["topicId", "topicName"],
          where: where,
        })
        .then((syllabusDetail) => {
          resolve(syllabusDetail);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};



exports.getTopicViewById = async (topicId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let where = { topicId: topicId };
      db.topic
        .findOne({
          attributes: ["topicId", "topicName"],
          where: where,
        })
        .then((syllabusDetail) => {
          resolve(syllabusDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

