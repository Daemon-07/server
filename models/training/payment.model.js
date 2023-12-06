module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('payment', {
    paymentId:  {
        type: DataTypes.INTEGER(255),
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey:true
    },
 	trainingId: {
        type: DataTypes.INTEGER(255),
        allowNull: false,
        required:true
    },
    trainingType:{
        type: DataTypes.INTEGER(4),
        allowNull:false,
        defaultValue:1,
        comment:'1-online, 0-offline'
    },
 	userId: {
        type: DataTypes.STRING,
        allowNull: false,
        required:true
    },
 	trainingAmount: {
        type: DataTypes.INTEGER(255),
        allowNull: false,
        required:true
    },
    amountAfterDiscount:{
        type:DataTypes.INTEGER,
        allowNull:false,
        required:true
    },
    batch:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true 
    },
    batchTiming:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true  
    }, 
    couponCode:DataTypes.STRING, 
 	refundFlag: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        required:true,
        defaultValue:0,
        comment:'0-not-refunded, 1-refund-success, 2-refund-pending, 3-refund-rejected'
    }, 
 	refundReason: DataTypes.STRING,
 	razorOrderNo:{
        type:DataTypes.STRING,
        required:true
    },
 	razorPaymentId:{
        type:DataTypes.STRING,
        required:true
    },
 	razorSignature:{
        type:DataTypes.STRING,
        required:true
    },
 	receiptIdentity:{
        type:DataTypes.STRING,
        required:true
    },
    paymentType:{
        type:DataTypes.INTEGER(4),
        required:true,
        defaultValue:1,
        comment:'1-free, 2-paid'
    },
    paymentMode:{
        type:DataTypes.INTEGER(4),
        required:true, 
        defaultValue:1,
        comment:'1-online 2-cash'
    },
 	paymentStatus:{
        type:DataTypes.INTEGER(4),
        required:true,
        defaultValue:0,
        comment:'0-noResponse, 1-success 2-canceled by user 3-Failed'
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
     