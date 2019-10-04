const express = require('express')
require('dotenv').config()
const server = express()
const chalk = require('chalk');
const log = console.log;

const port = process.env.PORT || 5000 ;

server.listen(port, () =>{
log(`\n${chalk.green('*************************************')} 
    Server listening on port: ${chalk.blue(port)} 
${chalk.green('*************************************')}\n`)

log(`     ♫♪.ılılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılılı.♫♪\n`)})
  

