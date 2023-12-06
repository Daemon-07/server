const studentSyllabusRepository = require("../../repository/student/syllabus.repo");

exports.getAllModuleWithChapter= (req) => {
    return new Promise(async (resolve, reject) => {
      try {
      let responseData = await studentSyllabusRepository.getAllModuleWithChapter(req.query.trainingId);
      resolve(responseData);
      } catch (error) {
        reject(error);
      };
    });
  };
  

  
  exports.getAllTopicsByChapter= (req) => {
    return new Promise(async (resolve, reject) => {
      try {
      let responseData = await studentSyllabusRepository.getAllTopicsByChapter(req.query.trainingId);
      resolve(responseData);
      } catch (error) {
        reject(error);
      };
    });
  };

  exports.getTopicViewById= (req) => {
    return new Promise(async (resolve, reject) => {
      try {
      let responseData = await studentSyllabusRepository.getTopicViewById(req.query.topicId);
      resolve(responseData);
      } catch (error) {
        reject(error);
      };
    });
  };

  