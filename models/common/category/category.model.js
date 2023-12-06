'use strict'

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('category', {
        categoryId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        categoryName: 
        {
            type: DataTypes.STRING,
            required: true,
            unique:'category'
        },
        domainId: {
            type: DataTypes.INTEGER(255),
            allowNull: false
        },
        imageUrl:  DataTypes.STRING,
        activeStatus: {
            type: DataTypes.INTEGER(5),
            defaultValue: 1,
            comment: '0=deleted, 1=active 2=inactive',
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
    });
    return Category;
};