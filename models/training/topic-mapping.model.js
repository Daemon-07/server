module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('payment', {
    mappingId:  {
        type: DataTypes.INTEGER(255),
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey:true
    },
    topicId:{
        type: DataTypes.INTEGER(200),
        allowNull:false,
    },
 	userId: {
        type: DataTypes.STRING,
        allowNull: false,
        required:true
    },
    completionStatus:{
        type:DataTypes.INTEGER(4),
        required:true,
        defaultValue:1,
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
 return Payment;
};
     