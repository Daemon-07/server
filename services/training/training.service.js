const TrainingRepository = require("../../repository/training/training.repo");
const uploadFile = require("../../Utils/fileUpload");
const traingSlug = require('../../Utils/commonSlug')

exports.addTrainingDetail = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      let trainingDetails = req.body;
      let fileUpload = await uploadFile(req, res);
      if (req.filePath) {
        trainingDetails = req.body;
        delete trainingDetails["photo"];
        trainingDetails.imageUrl = "/images/" + req.filePath;
        trainingDetails.domainId = parseInt(trainingDetails.domainId);
        trainingDetails.category = parseInt(trainingDetails.category);
        trainingDetails.subcategory = parseInt(trainingDetails.subcategory);
        trainingDetails.languageId = parseInt(trainingDetails.languageId);
        let newSlug = await traingSlug.traingSlug(trainingDetails.trainingName)
        trainingDetails.trainingSlug = newSlug
        let responseData = await TrainingRepository.insertTrainingDetail(trainingDetails);
        resolve(responseData);
      }
      else {
        resolve(req);
      }
    } catch (error) {
      reject(error)
    };
  });
};

exports.updateTraining = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await TrainingRepository.updateTrainingData(req.body);
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.getTrainingDetails = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (req.query.trainingId) {
        responseData = await TrainingRepository.getTrainingData(req.query.trainingId);
      } else {
        let requestPayload = {
          pagination: req.query.page,
        }
        responseData = await TrainingRepository.getAllTrainingData(requestPayload);
      }
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.getTrainingList = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (req.query.trainingId) {
        responseData = await TrainingRepository.getTrainingData(
          req.query.trainingId
        );
      } else {
        let requestPayload = {
          pagination: req.body.pagination,
        };
        responseData = await TrainingRepository.getAllTrainingData(
          requestPayload
        );
      }
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.getTrainingDetailsForAdmin = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (req.query.trainingId) {
        responseData = await TrainingRepository.getTrainingDataForAdmin(
          req.query.trainingId
        );
      } else {
        responseData = await TrainingRepository.getAllTrainingDataForAdmin();
      }
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.findTrainingName = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await TrainingRepository.findTrainingName(
        req.query.username
      );
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.deleteTraining = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await TrainingRepository.deleteTrainingData(
        req.query.trainingId
      );
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.getPurchasedTrainingDetails = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await TrainingRepository.getPurchasedTrainingData(
        req.user.userId);
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};

exports.getTrainingSyllabus = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await TrainingRepository.getSyllabus(req.query.trainingId);
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};
