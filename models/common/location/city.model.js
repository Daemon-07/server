'use strict'

module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('city', {
        cityId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        stateId:{
            type: DataTypes.INTEGER(255),
            required: true,
            unique:'city'
        },
        cityName: 
        {
            type: DataTypes.STRING,
            required: true,
            unique:'city'
        },
        activeStatus: {
            type: DataTypes.INTEGER(5),
            defaultValue: 1,
            comment: '0=deleted, 1=active 2=inactive',
            required: true,
            allowNull: false,
        }
    }, {
        underscored: false,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deteledAt',
      paranoid: true,
      timestamps: true
    });
    return City;
};