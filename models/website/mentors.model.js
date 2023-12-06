'use strict'

module.exports = (sequelize, DataTypes) => {
    const Mentors = sequelize.define('mentors', {
        mentorId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        
        mentorName: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        mentorMobileNumber: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        mentorEmailId: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        mentorDesignation: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        mentorProfileImage: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        aboutMentor: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        linkedlnId: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        currentCompany: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        previousCompany: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        mediaLinks: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        others: {
            type: DataTypes.STRING
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
    }, 
    
    {
        underscored: false,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deteledAt',
      paranoid: true,
      timestamps: true
    },
    );
    return Mentors;
};