const pool = require('../connect')

 const GetEmployeeListDb = async() => {
  console.log(`db` );
  const client= await pool.connect();
      try{
        return(
          (await client.query('SELECT * FROM employees')).rows
        )
      }  
      catch(err){
        console.log(err);
      }

      finally{

      client.release();
      }
  }

  



  module.exports = GetEmployeeListDb