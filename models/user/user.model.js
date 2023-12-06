"use strict";

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER(255),
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        unique: {
          args: true,
          msg: {
            errorCode: "USER_EXSIST",
            message: "Email address already in use!",
          },
        },
        allowNull: false,
      },
      mobile: {
        type: DataTypes.STRING,
        required: true,
        unique: {
          args: true,
          msg: {
            errorCode: "USER_EXSIST",
            message: "Mobile number already in use!",
          },
        },
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      state: {
        type: DataTypes.INTEGER(255),
        required: true,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        required: true,
      },
      address:DataTypes.STRING,
      gender: { 
        type: DataTypes.INTEGER(5),
        required: true,
      },
      dob:DataTypes.STRING,
      userType: {
        type: DataTypes.INTEGER(5),
        defaultValue: 1,
        comment: "1=user, 3=admin",
        require: true
      },
      loginType: {
        type: DataTypes.INTEGER(5),
        defaultValue: 1,
        required: false,
        allowNull: false,
      },
      activeStatus: {
        type: DataTypes.INTEGER(5),
        defaultValue: 2,
        comment: "0=deleted, 1=active,verified 2=notverified 3=blocked	",
        required: true,
        allowNull: false,
      },
      otp: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        required: false,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      underscored: false,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deteledAt",
      paranoid: true,
      timestamps: true,
    }
  );
  return Users;
};
