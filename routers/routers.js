
const express = require("express");

const {adminSignupController, adminSigninController} = require("../controllers/adminController");
const { addDivision, getDevision, updateDivision } = require("../controllers/divisionController");
const { addEmployee, getEmployee, updateEmployee, deleteEmployee, getFullEmployeedetails } = require("../controllers/employeeController");
const { addLocations, getLocations } = require("../controllers/locationController");
const { addTransaction, getAllTransaction, getoneemployeeTransaction, getAllreceivedTransaction, getAllgivenTransaction } = require("../controllers/transactionController");
const { adduser, updateuser, deleteUser, getUser } = require("../models/youtubeModel");
const router = express.Router();


router.post("/adminsignin",adminSigninController);
router.post("/adminsignup",adminSignupController);

router.post("/adddivision",addDivision);
router.get("/getdivision",getDevision);
router.put("/updatedivision",updateDivision);

router.post("/addlocations",addLocations);
router.get("/getlocations",getLocations);

router.post("/addemployee",addEmployee);
router.get("/getemployee",getEmployee);
router.put("/updateemployee",updateEmployee);
router.delete("/deleteemployee",deleteEmployee);

router.post("/addtransaction",addTransaction);
router.get("/getalltransaction",getAllTransaction);
router.get("/getone/:employeeModelId",getoneemployeeTransaction);
router.get("/getallreceivedtransaction",getAllreceivedTransaction);
router.get("/getallgiventransaction",getAllgivenTransaction);
router.get("/getfullemployeedetails",getFullEmployeedetails);


//youtube ---------------------------

router.post("/adduser",adduser);
router.put("/updateuser",updateuser);
router.delete("/deleteuser/:id",deleteUser);
router.get("/getuser",getUser);



module.exports = router;

