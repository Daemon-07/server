'use strict'

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('images', {
        imageId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        imagePath: 
        {
            type: DataTypes.STRING,
            required: true,
        },
    }, {
        underscored: false,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deteledAt',
      paranoid: true,
      timestamps: true
    });
    return Image;
};