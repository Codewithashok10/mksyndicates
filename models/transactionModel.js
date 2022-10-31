const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");


const transaction = sequelize.define("transaction",{
    date:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
    
    weight:{
        type:DataTypes.DOUBLE
    },
    paid:{
        type:DataTypes.BOOLEAN,
        defaultValues:false
    },
    received:{
        type:DataTypes.BOOLEAN,
    },
    paidamount:{
        type:DataTypes.INTEGER
    }
});

exports.transaction = transaction;