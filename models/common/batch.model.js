'use strict'

module.exports = (sequelize, DataTypes) => {
    const Batch = sequelize.define('batch', {
        batchId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        batchDate: 
        {
            type: DataTypes.STRING,
            required: true,
        },
        activeStatus: {
            type: DataTypes.INTEGER(5),
            defaultValue: 1,
            comment: '0=deleted, 1=active 2=expired 3=inactive ',
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
    return Batch;
};