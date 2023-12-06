'use strict'

module.exports = (sequelize, DataTypes) => {
    const Testimonial = sequelize.define('testimonial', {
        testimonialId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: false,
        },
        
        testimonial: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        activeStatus: {
            type: DataTypes.INTEGER(5),
            defaultValue: 2,
            comment: '0=deleted, 1=active,verified 2=notverified 3=blocked	',
            required: true,
            allowNull: false,
        },
    }, {
        underscored: false,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deteledAt',
      paranoid: true,
      timestamps: true
    },
    );
    return Testimonial;
};