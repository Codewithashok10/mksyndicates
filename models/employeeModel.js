const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");


const employeeModel = sequelize.define("employeeModel",{
    name:{
        type:DataTypes.STRING,
      //  unique:true,
        allowNull:false
    },
    doj:{
           type : DataTypes.DATE,
          
           defaultValue:DataTypes.NOW
    },
   
    location:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,

    },
    mobile:{
        type:DataTypes.STRING,
        allowNull:false
    },
   
   
        
},{tableName :"EmployeeModel"});


module.exports = employeeModel;