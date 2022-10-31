const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const adminAuthModel = sequelize.define("AdminAuth",{
    username: {
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING,
    }
},

{
    tableName:"adminAuth"
}
);

module.exports = adminAuthModel;