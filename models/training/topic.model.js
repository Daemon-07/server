'use strict'



module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define('topic', {
        topicId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            unique: true,
            allowNull: false,
            primaryKey:true
        },
        chapterId:{
            type:DataTypes.INTEGER(255),
            required:true
        }, 
        topicName: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        }, 
        topicDescription:{
            type:DataTypes.STRING,
        },
        topicNotes:DataTypes.STRING,
        meetingUrl:DataTypes.STRING,
        imageUrl:DataTypes.STRING,
        videoUrl:DataTypes.STRING,
        order:{
            type:DataTypes.INTEGER(50),
            default:1
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
    return Topic;
};