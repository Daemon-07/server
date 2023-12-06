'use strict'

module.exports = (sequelize, DataTypes) => {
    const Subcategory = sequelize.define('subcategory', {
        subcategoryId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        categoryId:{
            type:DataTypes.INTEGER(200),
            allowNull:false,
          
        },
        subcategoryName: 
        {
            type: DataTypes.STRING,
            required: true,
            
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
    return Subcategory;
};