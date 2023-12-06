const jwtToken = require("../../controllers/token/jwt_token");
const expressConfig = require("../../config")();
const Common = require('../../Utils/common');
const Mailer = require("../../Utils/mailer");
const userRepository = require("../../repository/user/user.repo");
var mailer = new Mailer();
var common = new Common();

exports.userLogin = function (req) {
    return new Promise(async function (resolve) {
        let outputResponse = {};
        try {
            let username = req.body.username;
            let password = req.body.password;
            let passwordVerified = false;
            let payload = {};
            outputResponse.token = null;
            outputResponse.userData = {};
            outputResponse.statusCode = 403;
            let userResponse = await common.fetchUserDetails(username);
            if (!userResponse.errorStatus) {
                
                let userDetails = userResponse.data;
                console.log(userDetails)
                passwordVerified = await common.comparePassword(password, userDetails.password);
                if (passwordVerified) {
                    payload.userId = userDetails.userId;
                    payload.name = userDetails.name;
                    payload.role=userDetails.userType;
                    payload.activeStatus = userDetails.activeStatus;
                    if (payload.activeStatus == 3) {
                        outputResponse.responseCode = 'USER_BLOCKED';
                        outputResponse.statusCode = 401;
                        outputResponse.status = false;
                        outputResponse.message = 'Invalid Username/Password';
                        outputResponse.data = {};
                        resolve(outputResponse);
                    } else {
                        let user = {}
                        token = await jwtToken.generateAccessToken(payload);
                        user.token = token;
                        user.details = payload;
                        outputResponse.responseCode = 'LOGIN_SUCCESS';
                        outputResponse.statusCode = 200;
                        outputResponse.status = true;
                        outputResponse.message = '';
                        outputResponse.data = user;
                        resolve(user);
                    }
                } else {
                    outputResponse.responseCode = 'INVALID_PASSWORD';
                    outputResponse.statusCode = 401;
                    outputResponse.status = false;
                    outputResponse.message = 'Invalid Username/Password';
                    outputResponse.data = {};
                    resolve(outputResponse);
                }

            } else {
                outputResponse.responseCode = 'INVALID_USERNAME';
                outputResponse.statusCode = 401;
                outputResponse.status = false;
                outputResponse.message = 'Invalid Username/Password';
                outputResponse.data = {};
                resolve(outputResponse);
            }
        } catch (error) {
            outputResponse.status = false;
            outputResponse.responseCode = error.code;
            outputResponse.statusCode = 500;
            outputResponse.message = error.message;
            outputResponse.data = {};
            resolve(outputResponse);
        }

    });
};

exports.forgotPassword = function (req) {
    return new Promise(async function (resolve) {
        let outputResponse = {};
        try {
            let username = req.body.username;
            let userId='';
            let userResponse = await common.fetchUserDetails(username);
            if (!userResponse.errorStatus) {
                let userDetails = userResponse.data;
                    userId = userDetails.userId;
                    if (userDetails.activeStatus == 3) {
                        outputResponse.responseCode = 'USER_BLOCKED'; 
                        outputResponse.statusCode = 401;
                        outputResponse.status = false;
                        outputResponse.message = 'Blocked User';
                        outputResponse.data = {};
                        resolve(outputResponse);
                    } else {
                        let mailStatus=await mailer.Mailer(userDetails.email, 'Reset Password', 'Its seems you have reseted your password');
                        if (!mailStatus.errorStatus) {
                            outputResponse.responseCode = 'MAIL_SENT';
                            outputResponse.statusCode = 200;
                            outputResponse.status = true;
                            outputResponse.message = 'Check your mail for the link';
                            outputResponse.data = {};
                            // resolve(outputResponse);
                        }
                        else{
                            outputResponse.responseCode = 'MAILLER_ERR';
                            outputResponse.statusCode = 401;
                            outputResponse.status = false;
                            outputResponse.message = 'Invalid Username/Password';
                            outputResponse.data = {};
                            // resolve(outputResponse);
                        }
                       
                        resolve(outputResponse);
                    }
                

            } else {
                outputResponse.responseCode = 'INVALID_USERNAME';
                outputResponse.statusCode = 401;
                outputResponse.status = false;
                outputResponse.message = 'User not Found';
                outputResponse.data = {};
                resolve(outputResponse);
            }
        } catch (error) {
            outputResponse.status = false;
            outputResponse.responseCode = error.code;
            outputResponse.statusCode = 500;
            outputResponse.message = error.message;
            outputResponse.data = {};
            resolve(outputResponse);
        }

    });         
};



exports.resetPassword = function (req) {
    return new Promise(async function (resolve) {
        let payload = {};
        req.body.password = req.body.password
          ? await common.hashPassword(req.body.password, expressConfig.salt)
          : null;
        let changeResponse = await userRepository.updateUserData(req.body);
        if (!changeResponse.errors) {
          payload.userId = changeResponse.userId;
          let token = await jwtToken.generateAccessToken(payload, "3000s");
          changeResponse = token;
        }
        resolve(changeResponse);
      });        
};
