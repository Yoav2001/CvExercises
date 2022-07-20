const express = require('express');
const router = express.Router();
const GetEmployeeListDb = require('../db/queries/GetEmployeeListQuery')
const GetEmployeeRoles = require('../db/queries/GetEmployeeRolesQuery')
const AddNewAttendance = require('../db/queries/AddNewAttendanceQuery')
const bodyParser = require('body-parser')

router.use(bodyParser.json());

router.get("/GetEmployeeList",async(request,response)=>{

const employees = await GetEmployeeListDb(1);
    response.json({employees})
})

router.get("/GetEmployeeRoles",async(request,response)=>{

    const roles = await GetEmployeeRoles(1);
        response.json({roles})
})

router.post("/AddNewAttendance",async(request,response)=>{
    const employee_id = request.body.employee_id;
    const role_id = request.body.role_id;

     await AddNewAttendance(employee_id,role_id);
        response.status(200).send()
})

module.exports = router;