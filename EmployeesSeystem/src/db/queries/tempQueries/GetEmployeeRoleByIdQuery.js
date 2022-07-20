const pool = require('../../connect')

const GetEmployeeRoleByIdQuery = async(employeeId,roleId) => {
    const client= await pool.connect();
        try{
          return(
            (await client.query(`SELECT * FROM employee_roles where employee_id = ${employeeId} and role_id = ${roleId} `)).rowCount
          )
        }  
        catch(err){
          console.log(err);
        }
  
        finally{
  
        client.release();
        }
    }


    module.exports = GetEmployeeRoleByIdQuery;