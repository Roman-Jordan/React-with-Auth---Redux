const express = require('express')
require('dotenv').config()
const server = express()


const port = process.env.PORT || 5000 ;


server.listen(port, () =>{
    console.log(`\n ${port} Server listening on port: ${port} ** \n`)
})
  

