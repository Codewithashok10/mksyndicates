const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const employeeModel = require("./employeeModel");


const divisionModel = sequelize.define("divisionModel",{
    division :{
        type:DataTypes.STRING,
        defaultValues:"A"
    },
    fkm:{
        type:DataTypes.STRING,
        defaultValues:"0 km"
    },
    tkm:{
        type:DataTypes.STRING,
        defaultValues:"0 km"
    },
    price:{
        type:DataTypes.INTEGER,
        defaultValues : 25,
    },
    weight:{
        type : DataTypes.DOUBLE,
        defaultValues:8.300
    }
    
});
//divisionModel.hasMany(employeeModel);

exports.divisionModel = divisionModel;