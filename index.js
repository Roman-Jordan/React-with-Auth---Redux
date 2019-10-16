const express = require("express");
const server = express();
require("dotenv").config();
const chalk = require("chalk");
const lg = console.log;
const primaryRouter = require("./api/server");
const cors = require('cors')


//terminal colors
const blu = chalk.blue;
const grn = chalk.green;


server.use(cors())
server.use(express.json());
server.use("/api", primaryRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome all" });
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  lg(`
    ${grn("*************************************")} 
        Server listening on port: ${blu(port)} 
    ${grn("*************************************")}`);
  lg(`         ♫♪.ılılıll${blu("|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|")}llılılı.♫♪\n`);
});
