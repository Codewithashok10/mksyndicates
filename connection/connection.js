const Sequelize = require("sequelize");



const sequelize = new Sequelize("mk_db","root","Jan@2022",{
    host:"localhost",
    dialect:"mysql",
     
   });



module.exports = sequelize;

