module.exports = function () {
  const bcrypt = require("bcryptjs");
  const { Op } = require("sequelize");

  const db = require("../models");

  this.generateOTP = async function () {
    return new Promise(function (resolve, reject) {
      var val = Math.floor(1000 + Math.random() * 9000);
      val = 1234;
      resolve(val);
    });
  };
  this.sendOTP = async function (userId) {
    return new Promise(async function (resolve, reject) {
      let otp = Math.floor(1000 + Math.random() * 9000);
      otp = 1234;
      // var otp = await this.generateOTP();
      let outputResponse = {};
      try {
        db.users
          .update(
            {
              otp: otp,
            },
            {
              where: {
                userId: userId,
              },
            }
          )
          .then((users) => {
            outputResponse.errorStatus = false;
            outputResponse.errorCode = "OTP_SENT";
            outputResponse.errorMessage = "OTP_SENT";
            outputResponse.data = users;
            resolve(outputResponse);
          })
          .catch((error) => {
            outputResponse.errorStatus = true;
            outputResponse.errorCode = error.code;
            outputResponse.errorMessage = error.message;
            outputResponse.data = {};
            resolve(outputResponse);
          });
      } catch (error) {
        outputResponse.errorStatus = true;
        outputResponse.errorCode = error.code;
        outputResponse.errorMessage = error.message;
        outputResponse.data = {};
        resolve(outputResponse);
      }
    });
  };

  this.verifyUserOtp = async function (userId, otp) {
    return new Promise(function (resolve, reject) {
      let outputResponse = {};
      try {
        db.users
          .findOne({
            where: {
              userId: userId,
              otp: otp,
            },
          })
          .then((users) => {
            db.users
              .update(
                {
                  activeStatus: 1,
                },
                {
                  where: {
                    userId: userId,
                  },
                }
              )
              .then((userDetails) => {
                console.log(users);
                outputResponse.errorStatus = false;
                outputResponse.errorCode = "DATA_FOUND";
                outputResponse.errorMessage = "";
                outputResponse.data = users;
                resolve(outputResponse);
              })
              .catch((error) => {
                outputResponse.errorStatus = true;
                if (error.code) {
                  outputResponse.errorCode = error.code;
                } else {
                  outputResponse.errorCode = "DB_ERROR";
                }
                outputResponse.errorMessage = error.message;
                outputResponse.data = {};
                resolve(outputResponse);
              });
          })
          .catch((error) => {
            outputResponse.errorStatus = true;
            if (error.code) {
              outputResponse.errorCode = error.code;
            } else {
              outputResponse.errorCode = "DB_ERROR";
            }
            outputResponse.errorMessage = error.message;
            outputResponse.data = {};
            resolve(outputResponse);
          });
      } catch (error) {
        outputResponse.errorStatus = true;
        outputResponse.errorCode = error.code;
        outputResponse.errorMessage = error.message;
        outputResponse.data = {};
        resolve(outputResponse);
      }
    });
  };

  this.hashPassword = function (password, saltRounds) {
    return new Promise(function (resolve, reject) {
      try {
        bcrypt.hash(password, saltRounds, function (err, hash) {
          if (err) {
            err = false;
            reject(err);
          } else {
            resolve(hash);
          }
        });
      } catch (error) {
        let err = {};
        err.error = true;
        err.message = "Error: " + error;
        resolve(err);
      }
    });
  };

  this.comparePassword = function (password, hash) {
    return new Promise(function (resolve) {
      try {
        bcrypt.compare(password, hash, function (err, result) {
          if (err) {
            err = false;
            resolve(err);
          } else {
            resolve(result);
          }
        });
      } catch (error) {
        let err = {};
        err.error = true;
        err.message = "Error: " + error;
        resolve(err);
      }
    });
  };

  this.fetchUserDetails = function (username) {

    return new Promise(async function (resolve, reject) {
      let outputResponse = {};
      try {
        db.users
          .findOne({
            logging: console.log,
            where: {
              [Op.or]: [
                {
                  userId: username,
                },
                {
                  email: username,
                },
                {
                  mobile: username,
                },
              ],
            },
          })
          .then((users) => {
           if(users)
           {
            outputResponse.errorStatus = false;
            outputResponse.errorCode = "DATA_FOUND";
            outputResponse.errorMessage = "";
            outputResponse.data = users;
            
           }
           else{
            outputResponse.errorStatus = true;
            outputResponse.errorCode = "DATA_NOT_FOUND";
            outputResponse.errorMessage = "No Data found";
            outputResponse.data = {};
            
           }
           resolve(outputResponse);
          })
          .catch((error) => {
            outputResponse.errorStatus = true;
            if (error.code) {
              outputResponse.errorCode = error.code;
            } else {
              outputResponse.errorCode = "DB_ERROR".error;
            }
            outputResponse.errorMessage = error.message;
            outputResponse.data = {};
            resolve(outputResponse);
          });
      } catch (error) {
        outputResponse.errorStatus = true;
        outputResponse.errorCode = error.code;
        outputResponse.errorMessage = error.message;
        outputResponse.data = {};
        resolve(outputResponse);
      }
    });
  };
};
