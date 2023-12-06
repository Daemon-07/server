const paymentRepository = require("../../repository/payment/payment.repo");
const trainingRepository = require("../../repository/training/training.repo");

const expressConfig = require("../../config")();
let razorpay = require("razorpay");
let razorpaySecret = expressConfig.razorPay.razorPaySecret;
let razorpayKey = expressConfig.razorPay.razorPayKeyOnly;

var instance = new razorpay({
  key_id: expressConfig.razorPay.razorPayKeyOnly,
  key_secret: expressConfig.razorPay.razorPaySecret,
});

exports.createOrder = function (req) {
  let requestBody = req.body;
  return new Promise(async function (resolve, reject) {
    let trainingId = requestBody.trainingId;
    let trainingType = requestBody.trainingType;
    let couponCode = requestBody.couponCode;
    let amountAfterDiscount;
    //    if(couponCode)
    //    {
    //     couponDetails=await
    //    }
    let trainingDetails = await trainingRepository.getTrainingData(trainingId);
    let trainingDetail = trainingDetails.data;

    if (trainingType == 1) {
      trainingAmount = trainingDetail.onlineDiscount;
    } else {
      trainingAmount = trainingDetail.discountAmount;
    }
    if (couponCode) {
      amountAfterDiscount = trainingAmount;
    } else {
      amountAfterDiscount = trainingAmount;
    }
    console.log(req.user);
    let orderDetail = {};
    orderDetail.trainingId = trainingDetail.trainingId;
    orderDetail.trainingType = trainingType;
    orderDetail.trainingAmount = trainingDetail.amount;
    orderDetail.batch = requestBody.batch;
    orderDetail.batchTiming = requestBody.batchTiming;
    orderDetail.amountAfterDiscount = amountAfterDiscount;
    orderDetail.couponCode = requestBody.couponCode;
    orderDetail.userId = req.user.userId;
    orderDetail.refundFlag = 0;

    let responseData;
    let minAmount = 1000000;
    instance.orders
      .create({
        amount: amountAfterDiscount * 100,
        currency: "INR",
        receipt: "REXCODER-" + Math.random(),
        first_payment_min_amount: 1000000,
        partial_payment: 1,
      })
      .then(async (paymentResponse) => {
        orderDetail.razorOrderNo = paymentResponse.id;
        responseData = await paymentRepository.createOrder(orderDetail);

        resolve(responseData);
      })
      .catch((paymentError) => {
        // error
        console.log(paymentError);
      });
  });
};

exports.updateOrder = async function (req) {
  return new Promise(async function (resolve, reject) {
    let orderDetails = req.body;

    let responseData = await paymentRepository.updateOrder(orderDetails);
    resolve(responseData);
  });
};

exports.getOrderList = function (req) {
  return new Promise(async function (resolve, reject) {
    var responseData;

    if (req.query.id) {
      responseData = await paymentRepository.getOrderList(req.query.id);
    } else {
      responseData = await contactRepository.getOrderList(req.body);
    }

    resolve(responseData);
  });
};
