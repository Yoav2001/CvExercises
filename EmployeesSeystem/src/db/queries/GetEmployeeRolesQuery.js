const pool = require('../connect')

const GetEmployeeRoles = async(id) => {
    const client= await pool.connect();
        try{
          return(
            (await client.query(`SELECT role.role_id,role.description FROM employee_roles Left join role on role.role_id = employee_roles.role_id where employee_roles.employee_Id = ${id} and employee_roles.enabled =true`)).rows
          )
        }  
        catch(err){
          console.log(err);
        }
  
        finally{
  
        client.release();
        }
    }


    module.exports = GetEmployeeRoles;