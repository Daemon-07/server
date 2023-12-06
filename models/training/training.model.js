'use strict'

module.exports = (sequelize, DataTypes) => {
    const Training = sequelize.define('training', {
        trainingId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            unique: true,
            allowNull: false,
            primaryKey:true
        }, 
        trainingName: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        trainingSlug:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }, 
        
        trainingType:{
            type:DataTypes.INTEGER(4),
            required: true,
            defaultValue:0,
            comment:'0-training, 1-internship, 2-course'
        },
        learnersLevel:{  
            type:DataTypes.STRING,
            required:true
        },
        prerequisite:{
            type:DataTypes.TEXT
        },
        amount: {
            type: DataTypes.STRING, 
            required: true,
            allowNull: false,
        },
        discountAmount: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        onlineDiscount:{
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        imageUrl:{
            type: DataTypes.STRING
        },
        sampleVideoUrl:{ 
            type:DataTypes.STRING
        },
        syllabus:DataTypes.TEXT, 
        shortNote:DataTypes.TEXT,
        description:DataTypes.TEXT,
        perks:DataTypes.TEXT, 
        stack:DataTypes.STRING,
        domainId:DataTypes.INTEGER(100),
        category:DataTypes.INTEGER(100),
        subcategory:DataTypes.INTEGER(100),
        languageId:DataTypes.INTEGER(50),
        medium:{
            type:DataTypes.INTEGER(4),
            defaultValue:2,
            comment:'0-onlyOnline, 1-onlyOffline, 2-bothOnline&Offline'
        },
        classLink:DataTypes.STRING,
        fallon:{
            type:DataTypes.STRING,
            defaultValue:'Week Days',
        },
        totalHours:DataTypes.STRING,
        duration:DataTypes.STRING,
        others:DataTypes.STRING, 
        eventType:{
            type:DataTypes.INTEGER(5),
            defaultValue:1,
            comment:'1-training,2-webinar'
        },
        activeStatus: {
            type: DataTypes.INTEGER(5),
            defaultValue: 2,
            comment: '0=deleted, 1=active,verified 2=notverified 3=blocked	',
            required: true,
            allowNull: false,
        },
        createdBy:DataTypes.STRING,
        updatedBy:DataTypes.STRING,
        deletedBy:DataTypes.STRING
        

    }, {
        underscored: false,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deteledAt',
      paranoid: true,
      timestamps: true
    },
    );
    return Training;
};