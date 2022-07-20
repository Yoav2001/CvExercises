
const pool = require('../../connect')

const GetEmployeeListById = async(id) => {
    const client= await pool.connect();
        try{
          return(
            (await client.query(`SELECT * FROM employees where id = ${id}`)).rowCount
          );
        }  
        catch(err){
          console.log(err);
        }
  
        finally{
  
        client.release();
        }
    }

    module.exports= GetEmployeeListById;
