const  express = require('express')
const bodyparser = require("body-parser");
const router = require("./routers/routers");
const sequelize = require('./connection/connection');
const employeeModel = require('./models/employeeModel');
const { divisionModel } = require('./models/divisionModel');
const { locations } = require('./models/locationsModel');
const { transaction } = require('./models/transactionModel');


const app = express()
const port = 1003


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
// sequelize.authenticate().then(()=>{
   divisionModel.hasMany(employeeModel,{ForeignKey:"employeeId",as:"employees"});
   locations.hasMany(employeeModel,{ForeignKey:"employeeId",as:"employees"});
   divisionModel.hasMany(locations,{ForeignKey:"locationId",as:"locations"});
   locations.hasMany(divisionModel)
   employeeModel.hasMany(transaction);
   transaction.belongsTo(employeeModel);
   employeeModel.belongsTo(divisionModel);
   
  
   
   
   
//     console.log("athenticated");
// });


sequelize.sync({alter:true}).then(()=>{
    console.log("synced");
});

app.use(router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))