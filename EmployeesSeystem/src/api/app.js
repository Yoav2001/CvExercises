const mainRouterApi = require('./employeeRouter') 
const express = require('express');
const app =express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use("/",mainRouterApi)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })