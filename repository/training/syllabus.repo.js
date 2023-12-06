const db = require("../../models");
const { Op } = require("sequelize");

exports.insertModuleDetail = async (moduleData) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.module
        .create(moduleData)
        .then((moduleDetail) => {
          resolve(moduleDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.updateModuleData = async (moduleData) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.module
        .update(moduleData, {
          where: {
            moduleId: moduleData.moduleId,
          }
        })
        .then((moduleDetail) => {
          resolve(moduleDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.getModuleList = async (trainingId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let where = { trainingId: trainingId };
      db.module
        .findAndCountAll({
          where: where,
        })
        .then((countries) => {
          resolve(countries);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.insertChapterDetail = async (chapterData) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.chapter
        .create(chapterData)
        .then((chapterDetail) => {
          resolve(chapterDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.getChapterList = async (moduleId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let where = { moduleId: moduleId };
      db.chapter
        .findAndCountAll({
          where: where,
        })
        .then((chapterList) => {
          resolve(chapterList);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.updateChapterData = async (chapterData) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.chapter
        .update(chapterData, {
          where: {
            chapterId: chapterData.chapterId,
          },
        })
        .then((chapterDetail) => {
          resolve(chapterDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.getTopicsList = async (chapterId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let where = { chapterId: chapterId };
      db.topic
        .findAndCountAll({
          where: where
        })
        .then((dbdata) => {

          resolve(dbdata);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.getTopicDetail = async (topicId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let where = { topicId: topicId };
      db.topic
        .findOne({
          where: where,
        })
        .then((topic) => {
          resolve(topic);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.addTopic = async (topicData) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.topic
        .create(topicData)
        .then((topicDetail) => {
          resolve(topicDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.updateTopic = async (topicData) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.topic
        .update(topicData, {
          where: {
            topicId: topicData.topicId,
          },
        })
        .then((chapterDetail) => {
          resolve(chapterDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};