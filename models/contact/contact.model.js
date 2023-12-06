'use strict'

module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('contact', {
        id: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            unique: true,
            allowNull: false,
            primaryKey:true
        },
        name: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        mobile: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        city:{
            type: DataTypes.STRING
        },
        subject:{
            type:DataTypes.STRING
        },
        createdBy:DataTypes.STRING,
    }, {
        underscored: false,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deteledAt',
      paranoid: true,
      timestamps: true
    },
    );
    return Contact;
};