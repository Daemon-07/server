'use strict'

module.exports = (sequelize, DataTypes) => {
    const AlumniFeedback = sequelize.define('alumniFeedback', {
        feedbackId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        alumniName: 
        {
            type: DataTypes.STRING,
            required: true,
        },
        alumniPhoto:{
            type: DataTypes.STRING,
            required: true,
        },
        companyLogo:{
            type: DataTypes.STRING,
            required: true,
        },
        currentDesignation:{
            type: DataTypes.STRING,
            required: true,
        },
        rating:{
            type: DataTypes.STRING,
            required: true,
        },
        feedback:{
            type: DataTypes.STRING,
            required: true,
        },
        activeStatus: {
            type: DataTypes.INTEGER(5),
            defaultValue: 1,
            comment: '0=deleted, 1=active 2=inactive',
            required: true,
            allowNull: false,
        },
        createdBy:DataTypes.STRING,
        updatedBy: DataTypes.STRING,
        deletedBy: DataTypes.STRING
    }, {
        underscored: false,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deteledAt', 
      paranoid: true,
      timestamps: true
    });
    return AlumniFeedback;
};