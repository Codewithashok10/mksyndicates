const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");


const locations = sequelize.define("locations",{
   location :{
    type:DataTypes.STRING,
    allowNull:false,
   }
});

exports.locations = locations;