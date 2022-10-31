
const { where } = require("sequelize");
const { divisionModel } = require("../models/divisionModel");
const employeeModel = require("../models/employeeModel");
const { locations } = require("../models/locationsModel");
const { transaction } = require("../models/transactionModel");



const addEmployee = async (req, res) => {
    try {
        let data = {
            name: req.body.name,
            location: req.body.location,
            mobile: req.body.mobile,
            image: req.body.image,
            divisionModelId: req.body.divisionModelId,
            locationId: req.body.locationId

        };
        let detail = await employeeModel.create(data);
        await detail.save();
        return res.status(201).json(detail);
    } catch (err) {
        return res.status(401).json({ msg: `${err}` });
    }
};

const getEmployee = async (req, res) => {
   // const employees  = await employeeModel.findAll();
    // let lid = {
    //     locationId: 1
    // };
    const employees = await employeeModel.findAll({
       
        // include: [
        //     {
        //         model: divisionModel,
        //         // include: [{
        //         //     model: locations,
        //         //     as: "locations",
                   
        //         // }],
                

        //     },
            

        // ],
        

    },)
    if (!employees) {
        return res.status(400).json({ msg: "no data found" });
    };
    return res.status(200).json( employees );
}
const getFullEmployeedetails = async (req, res) => {
    // const employees  = await employeeModel.findAll();
     // let lid = {
     //     locationId: 1
     // };
     const employees = await employeeModel.findAll({
        
         include: [
             {
                 model: divisionModel,
                 
                 
 
             },
             
 
         ],
         
 
     },)
     if (!employees) {
         return res.status(400).json({ msg: "no data found" });
     };
     return res.status(200).json( employees );
 }
const updateEmployee = async (req, res) => {
    const employee = await employeeModel.findOne({ where: { id: req.body.id } });
    if (!employee) {
        return res.status(401).json({ msg: "user not found" });
    } else {
        await employee.update({
            name: req.body.name,
            location: req.body.location,
            mobile: req.body.mobile,
            image: req.body.image,
        });
        return res.status(200).json(employee);
    }
}

const deleteEmployee = async (req, res) => {
    const employee = await employeeModel.findOne({ where: { id: req.body.id } });
    if (!employee) {
        return res.status(401).json({ msg: "cant delete" });
    } else {
        let deletedEmployee = await employee.destroy();
        return res.status(202).json(deletedEmployee);
    }

}

exports.addEmployee = addEmployee;
exports.getEmployee = getEmployee;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;
exports.getFullEmployeedetails = getFullEmployeedetails;