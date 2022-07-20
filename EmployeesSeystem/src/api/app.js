const mainRouterApi = require('./employeeRouter') 
const express = require('express');
const app =express();
const router = express.Router();
const GetEmployeeListDb = require('../db/employeeDb')

// app.use(mainRouterApi())




app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.get("/GetEmployeeList",async(request,response)=>{

  console.log("aaa");
const employees =  GetEmployeeListDb();
  
response.json({employees})
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })