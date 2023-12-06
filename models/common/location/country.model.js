'use strict'

module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('country', {
        countryId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        countryName: 
        {
            type: DataTypes.STRING,
            required: true,
            unique:'countryName'
        },
        countryCode: 
        {
            type: DataTypes.STRING,
            required: true,
            unique:'countryCode'
        },
        activeStatus: {
            type: DataTypes.INTEGER(5),
            defaultValue: 1,
            comment: '0=deleted, 1=active 2=inactive',
            required: true,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE
    }, {
        underscored: false,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deteledAt',
      paranoid: true,
      timestamps: true
    });
    return Country;
};