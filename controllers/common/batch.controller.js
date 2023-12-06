const sendResponse = require('../../functions/response');
const batchService = require('../../services/common/batch.service');

exports.addBatch = async (req, res) => {
    try {
        let responseData = await batchService.addBatch(req);
        let response = {};
        if (!responseData) {
            response.statusCode = 409;
            response.responseCode = "DATA_NOT_ADDED";
            response.message = "failed";
          } else {
            response.statusCode = 200;
            response.responseCode = "DATA_ADDED";
            response.message = "SUCCESS";
            response.data = responseData;
          }

    sendResponse.sendResponseObj(
        response.statusCode,
        response.responseCode,
        response.message,
        res,
        response.data
      );
} catch (error) {
    res.send(error);
}
};


exports.getBatch = async (req, res) => {
    try {
        if (req.body || req.query.batchId) {
            let responseData = await batchService.getBatch(req);
            let response = {};
            if (!responseData) {
                response.statusCode = 409;
                response.responseCode = "DATA_NOT_FOUND";
                response.message = "failed";
              } else {
                response.statusCode = 200;
                response.responseCode = "DATA_FOUND";
                response.message = "SUCCESS";
                response.data = responseData;
              }
              
        } else {
            response.statusCode = 409;
            response.responseCode = "INVALID_PAYLOAD";
            response.message = "failed";
        }

        sendResponse.sendResponseObj(
            response.statusCode,
            response.responseCode,
            response.message,
            res,
            response.data
          );
    } catch (error) {
        res.send(error);
    }
};
