const { response } = require("../../app");
const syllabusRepository = require("../../repository/training/syllabus.repo");
const uploadFile = require("../../Utils/fileUpload");


exports.addModuleDetail = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await syllabusRepository.insertModuleDetail(req.body);
      resolve(responseData);
    }
    catch (error) {
      reject(error);
    }
  });
};

exports.updateModuleDetail = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await syllabusRepository.updateModuleData(req.body);
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.getModuleList = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await syllabusRepository.getModuleList(
        req.query.trainingId
      );
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.addChapterDetail = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await syllabusRepository.insertChapterDetail(req.body);
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.getChapterList = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await syllabusRepository.getChapterList(
        req.query.moduleId
      );
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.updateChapter = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await syllabusRepository.updateChapterData(req.body);
      resolve(responseData);
    }
    catch (error) {
      reject(error)
    };
  });
};

exports.getTopicsList = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await syllabusRepository.getTopicsList(req.query.chapterId);
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.getTopicDetail = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await syllabusRepository.getTopicDetail(
        req.query.topicId
      );
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.addTopic = (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      let fileUpload = await uploadFile(req, res);
      topicDetails = req.body;
      delete topicDetails["photo"];
      topicDetails.imageUrl = "/images/" + req.filePath;
      let responseData = await syllabusRepository.addTopic(topicDetails);
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.updateTopic = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await syllabusRepository.updateTopic(req.body);
      resolve(responseData);
    }
    catch (error) {
      reject(error)
    };
  });
};