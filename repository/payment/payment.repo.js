const db = require('../../models');
const {
    Op
} = require("sequelize");
exports.createOrder = async function (orderData) {
    return new Promise(async function (resolve, reject) {

            db.payment.create(orderData).then(orderDetail => {
                resolve(orderDetail);
            }).catch(error => {
                resolve(error);
            });

    });

};

exports.updateOrder = async function (orderData) {
    return new Promise(async function (resolve, reject) {

            db.payment.update(orderData, {
                where: {
                    razorOrderNo: orderData.razorOrderNo
                }
            }).then(orderDetail => {
                resolve(orderDetail);
            }).catch(error => {
                resolve(error);
            });
       
    });

};


exports.getOrderList = async function (payload) {

    return new Promise(async function (resolve, reject) {

            db.payment.findAndCountAll({
                attributes: ['orderId']
            }).then(orders => {
                resolve(orders);
            }).catch(error => {
                resolve(error);
            });

    });

};



