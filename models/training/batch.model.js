'use strict'



module.exports = (sequelize, DataTypes) => {
    const Batch = sequelize.define('batch', {
        batchId: {
            type: DataTypes.INTEGER(255),
            autoIncrement: true,
            unique: true,
            allowNull: false,
            primaryKey:true
        },
        batchName: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        }, 
        totalSlot:{
            type:DataTypes.INTEGER(50),
        },
       trainingId:{
            type:DataTypes.INTEGER(255),
            required:true
        },
        earlyBird:{
            type:DataTypes.DATEONLY,
            require:true 
        },
        startDate:{
            type:DataTypes.DATEONLY,
            require:true
        },
        endDate:{
            type:DataTypes.DATEONLY,
            require:true
        },
        amount:{
            type:DataTypes.INTEGER(50),
            default:1
        },
        discountAmount:{
            type:DataTypes.INTEGER(50),
            default:1
        },
        type:{
            type:DataTypes.INTEGER(50),
            default:1,
            comment: ' 1=online,verified 2=offline 3=both	',
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
        

    }, {
        underscored: false,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deteledAt',
      paranoid: true,
      timestamps: true
    },
    );
    return Batch;
};