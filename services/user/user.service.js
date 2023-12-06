const expressConfig = require("../../config")();
const userRepository = require("../../repository/user/user.repo");
const Common = require("../../Utils/common");
const jwtToken = require("../../controllers/token/jwt_token");
var common = new Common();

exports.userRegistration = async (req) => {
  return new Promise(async (resolve) => {
    try {
      let userData = {};
      let payload = {};
      userData = req.body;
      userData.password = req.body.password ? await common.hashPassword(req.body.password, expressConfig.salt) : null;
      let insertResponse = await userRepository.insertUserData(userData);
      if (!insertResponse.errorStatus) {
        let user = {};
        let userDetails = insertResponse.data;
        payload.userId = userDetails.userId;
        let token = await jwtToken.generateAccessToken(payload);
        user.token = token;
        let userResponse = await common.sendOTP(payload.userId);
        resolve(userResponse);
      }
      else {
        resolve(insertResponse);
      }
    } catch (error) {
      reject(error);
    }
  });
};

exports.updateUserData = (req) => {
  try {
    return new Promise(async (resolve) => {
      let userResponse = await userRepository.updateUserData(req);
      resolve(userResponse);
    });
  } catch (error) {
    reject(error)
  };
};

exports.verifyUserOtp = async (req) => {
  return new Promise(async (resolve) => {
    try {
      let payload = {};
      let user = {};
      let token = "";
      let userDetails = {};
      outputResponse.token = null;
      outputResponse.userData = {};
      outputResponse.statusCode = 403;
      let otp = req.body.otp;
      let userId = req.user.userId;
      let userResponse = await common.verifyUserOtp(userId, otp);
      resolve(userResponse);
    }
    catch (error) {
      reject(error)
    };
  });
};

exports.resendUserOtp = (req) => {
  return new Promise(async (resolve) => {
    try {
      let outputResponse = {};
      let token = "";
      let payload = {};
      payload.userId = req.body.userId;
      token = await jwtToken.generateAccessToken(payload, "300s");
      outputResponse.token = token;
      let userResponse = await common.sendOTP(payload.userId);
      resolve(userResponse);
    }
    catch (error) {
      reject(error)
    };
  });
};

exports.changePassword = (req) => {
  return new Promise(async (resolve) => {
    try {
      let userId = req.body.userId;
      let password = req.body.password
        ? await common.hashPassword(req.body.password, expressConfig.salt)
        : null;
      let userResponse = await userRepository.changePassword(userId, password);
      resolve(userResponse);
    }
    catch (error) {
      reject(error)
    };
  });
};

exports.checkUsername = (req) => {
  return new Promise(async (resolve) => {
    try {
      let userResponse = await common.fetchUserDetails(req.query.username);
      resolve(userResponse);
    }
    catch (error) {
      reject(error)
    };
  });
};

exports.getUserDetails = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await userRepository.getUserDetail(req);
      resolve(responseData);
    }
    catch (error) {
      reject(error)
    };
  });
};

exports.deleteUser = (req) => {
  return new Promise(async (resolve) => {
    try {
      let userResponse = await userRepository.deleteUser(req.body.userId);
      resolve(userResponse);
    }
    catch (error) {
      reject(error)
    };
  });
};
