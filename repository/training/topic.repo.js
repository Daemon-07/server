const db = require('../../models');
const {
    Op
} = require("sequelize");


exports.insertTopicDetail = async (topicData) => {
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

exports.getTopicList = async (chapterId) => {
    return new Promise(async function (resolve, reject) {
        try {
            let where = { chapterId: chapterId };
            db.topic
                .findAndCountAll({
                    where: where,
                }).then((dbdata) => {
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


exports.updateTopicData = async (topicData) => {
    return new Promise(async function (resolve, reject) {
        try {
            db.topic
                .update(topicData, {
                    where: {
                        topicId: topicData.topicId
                    }
                }).then((topicDetail) => {
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



