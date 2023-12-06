const db = require("../../models");
const { Op } = require("sequelize");

exports.insertTrainingDetail = async (trainingData) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.training
        .create(trainingData)
        .then((trainingDetail) => {
          resolve(trainingDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.getAllTrainingData = async (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      let where = {};
      let neededAttributes;
      if (payload.pagination) {
        if (payload.query) {
          if (payload.query.search) {
            let searchQuery = payload.query.search;
            where = { trainingName: searchQuery.keyword };
          }
        }
      }
      db.training
        .findAndCountAll({
          attributes: neededAttributes,
          include: [
            {
              model: db.domain,
              as: "trainingDomain",
              attributes: ["domainId", "domainName"],
            },
            {
              model: db.language,
              as: "language",
              attributes: ["languageId", "languageName"],
            },
          ],
          where: where,
        })
        .then((trainingData) => {
          resolve(trainingData);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.getTrainingData = async (inputTrainingId) => {
  return new Promise(async (resolve, reject) => {
    try {
      where = {
        [Op.or]: [
          { trainingSlug: inputTrainingId },
          { trainingId: inputTrainingId },
        ],
        activeStatus: 2,
      };
      db.training
        .findOne({
          attributes: [
            "trainingId",
            "trainingName",
            "imageUrl",
            "amount",
            "discountAmount",
            "trainingType",
            "onlineDiscount",
            "learnersLevel",
            "stack",
            "description",
            "prerequisite",
            "sampleVideoUrl",
            "syllabus",
            "perks",
            "category",
            "subcategory",
            "medium",
            "others",
            "eventType",
            "activeStatus",
            "duration",
            "fallon",
            "totalHours",
            "shortNote",
          ],
          include: [
            {
              model: db.domain,
              as: "trainingDomain",
              attributes: ["domainId", "domainName"],
            },
            {
              model: db.language,
              as: "language",
              attributes: ["languageId", "languageName"],
            },
          ],
          where: where,
        })
        .then((trainingData) => {
          resolve(trainingData);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.getTrainingDataForAdmin = async (inputTrainingId) => {
  return new Promise(async (resolve, reject) => {
    try {
      where = {
        [Op.or]: [
          { trainingSlug: inputTrainingId },
          { trainingId: inputTrainingId },
        ],
      };
      db.training
        .findOne({
          include: [
            {
              model: db.domain,
              as: "trainingDomain",
              attributes: ["domainId", "domainName"],
            },
            {
              model: db.language,
              as: "language",
              attributes: ["languageId", "languageName"],
            },
          ],
          where: where,
        })
        .then((trainingData) => {
          resolve(trainingData);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.getAllTrainingDataForAdmin = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      db.training
        .findAndCountAll({
          include: [
            {
              model: db.domain,
              as: "trainingDomain",
              attributes: ["domainId", "domainName"],
            },
            {
              model: db.language,
              as: "language",
              attributes: ["languageId", "languageName"],
            },
          ]
        })
        .then((trainingData) => {
          resolve(trainingData);
        }).catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};


exports.getPurchasedTrainingData = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.payment
        .findAndCountAll({
          where: {
            userId: userId,
            paymentStatus: 1,
          },
          attributes: [
            "paymentId",
            "trainingId",
            "trainingType",
            "userId",
            "paymentStatus",
            "trainingAmount",
            "amountAfterDiscount",
            "batch",
            "batchTiming"
          ],
          include: [
            {
              model: db.training,
              as: "training",
              attributes: [
                "trainingId",
                "trainingName",
                "imageUrl",
                "amount",
                "discountAmount",
                "trainingType",
                "onlineDiscount",
                "learnersLevel",
                "stack",
                "description",
                "prerequisite",
                "sampleVideoUrl",
                "syllabus",
                "perks",
                "category",
                "subcategory",
                "medium",
                "others",
                "eventType",
                "activeStatus",
                "duration",
                "fallon",
                "totalHours",
                "shortNote",
              ],
            },
          ],
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};

exports.getMatchingSlug = async (trainingSlug) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.training
        .findAndCountAll({
          where: {
            trainingSlug: {
              [Op.like]: `%${trainingSlug}%`,
            },
          },
          attributes: ["trainingSlug"],
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          resolve(error);
        });
    } catch (error) {
      reject(error);
    };
  });
};


exports.getSyllabus = async (trainingId) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.training.findOne({
        where: { trainingId: trainingId },
        attributes: ["trainingName"],
        include: [
          {
            model: db.module,
            as: 'module',
            where: { activeStatus: 2 },
            include: [{
              model: db.chapter,
              as: 'chapter',
              where: { activeStatus: 2 }
            }]
          }
        ]
      }).then((data) => {
        resolve(data);
      }).catch((error) => {
        resolve(error);
      });
    } catch (error) {
      reject(error)
    };
  });
}

