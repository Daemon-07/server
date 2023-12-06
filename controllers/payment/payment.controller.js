const sendResponse = require('../../functions/response');
const paymentService = require('../../services/payment/payment.service');


exports.createOrder = async (req, res) => {
  try {
    if (req.body || req.query.countryId) {
      let responseData = await paymentService.createOrder(req);
      let response = {};
      if (!responseData) {
        response.statusCode = 409;
        response.responseCode = "ORDER_NOT_CREATED";
        response.message = "FAILED";
      } else {
        response.statusCode = 200;
        response.responseCode = "ORDER_CREATED";
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
    }
  } catch (error) {
    res.send(error);
  }
};

exports.updateOrder = async (req, res) => {
  try {
   
    let responseData = await paymentService.updateOrder(req);
    let response = {};
    if (!responseData) {
      response.statusCode = 409;
      response.responseCode = "ORDER_NOT_UPDATED";
      response.message = "FAILED";
    } else {
      response.statusCode = 200;
      response.responseCode = "ORDER_UPDATED";
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

}