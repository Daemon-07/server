const db = require("../../models");
const { Op } = require("sequelize");

exports.insertUserData = (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      let outputResponse = {};
      db.users.create(userData).then(usersDetails => {
        resolve(outputResponse);
      }).catch(error => {
        outputResponse.errorStatus = true;
        if (error.message.errorCode) {
          outputResponse.errorCode = error.message.errorCode;
          outputResponse.errorMessage = error.message.message;
        } else {
          outputResponse.errorCode = 'DB_ERROR';
          outputResponse.errorMessage = error.message;
        }
        outputResponse.data = {};
        resolve(outputResponse);
      });
    }
    catch (error) {
      reject(error)
    };
  });
};

exports.updateUserData = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let where = {};
      if (req.user.userId) {
        where = {
          userId: req.user.userId,
        }
      }
      else {
        where = {
          userId: req.body.userId,
        }
      }
      db.users
        .update(req.body, {
          where: where,
        })
        .then((usersDetails) => {
          resolve(usersDetails);
        })
        .catch((error) => {
          resolve(error);
        });
    }
    catch (error) {
      reject(error)
    };
  });
};

exports.addUserProfile = (profileData) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.userProfile
        .create(profileData)
        .then((profileDetail) => {
          resolve(profileDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    }
    catch (error) {
      reject(error)
    };
  });
};

exports.updateUserProfile = (profileData, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.userProfile
        .update(profileData, {
          where: {
            userId: userId,
          },
        })
        .then((profileDetail) => {
          resolve(profileDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    }
    catch (error) {
      reject(error)
    }
  });
};

exports.changePassword = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.users
        .update(
          {
            password: password,
          },
          {
            where: {
              [Op.or]: [
                {
                  userId: username,
                },
                {
                  name: username,
                },
                {
                  email: username,
                },
                {
                  mobile: username,
                },
              ],
            },
          }
        )
        .then((profileDetail) => {
          resolve(profileDetail);
        })
        .catch((error) => {
          resolve(error);
        });
    }
    catch (error) {
      reject(error)
    }
  });
};

exports.getUserDetail = (req) => {
  var username = "";
  if (req.user) {
    username = req.user.userId;
  } else if (req.query.userId) {
    username = req.query.userId;
  } else if (req.body.userId) {
    username = req.body.userId;
  }
  return new Promise(async (resolve, reject) => {
    try {
      db.users
        .findOne({
          attributes: [
            "userId",
            "name",
            "email",
            "dob",
            "mobile",
            "state",
            "city",
            "address",
          ],
          include: [
            {
              model: db.state,
              as: "userState",
              attributes: ["stateId", "stateName"],
            },
          ],
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
          console.log(users);
          resolve(users);
        })
        .catch((error) => {
          resolve(error);
        });
    }
    catch (error) {
      reject(error)
    }
  });
};

exports.deleteUser = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
    db.users
      .destroy({
        where: {
          userId: userId,
        },
      })
      .then((deleteResponce) => {
        resolve(deleteResponce);
      })
      .catch((error) => {
        resolve(error);
      });
    }
    catch (error) {
      reject(error)
    }
  });
};
