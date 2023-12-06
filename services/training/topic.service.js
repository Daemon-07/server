const topicRepository = require('../../repository/training/topic.repo');

exports.addTopicDetail = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await topicRepository.insertTopicDetail(topicDetails);
            resolve(responseData);
        } catch (error) {
            reject(error);
        };
    });
};

exports.getTopicList = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await topicRepository.getTopicList(
                req.query.chapterId
            );
            resolve(responseData);
        } catch (error) {
            reject(error);
        };
    });
};

exports.updateTopic = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await topicRepository.updateTopicData(req.body);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};
