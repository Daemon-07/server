'use strict'

module.exports = (sequelize, DataTypes) => {
    const Consultation = sequelize.define('consultation_booking', {
        bookingId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        studentName: 
        {
            type: DataTypes.STRING,
            required: true,
        },
        studentEmail:{
            type:DataTypes.STRING,
            required:true
        },
        studentMobile:{
            type:DataTypes.STRING,  
            required:true
        },
        lookingFor:{
            type:DataTypes.STRING
        },
        note:{
            type:DataTypes.TEXT
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
    return Consultation;
};