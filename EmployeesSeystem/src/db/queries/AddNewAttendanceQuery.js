const pool = require('../connect')

const GetEmployeeByIdQuery = require('./tempQueries/GetEmployeeByIdQuery')
const GetEmployeeRoleByIdQuery = require('./tempQueries/GetEmployeeRoleByIdQuery')

const AddNewAttendance= async(employeeId,roleId) => {
    if(GetEmployeeByIdQuery(employeeId)===1 && GetEmployeeRoleByIdQuery(employeeId,roleId)===0){
        const sql =`Insert INTO attendance (employee_id,role_id,action_time) values (${employeeId},${roleId},'${new Date()}')`;
        const client= await pool.connect();
        try{
            await client
            .query(sql)
        }
      
        catch(err){
            console.log(err);
          }
    
          finally{
    
          client.release();
          }
    }
}

  module.exports=AddNewAttendance