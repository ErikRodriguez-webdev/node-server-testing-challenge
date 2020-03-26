const express = require("express");

const SchemeRouter = require("../schemes/schemesRouter");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h1>API IS UP</h1>`);
});

//Endpoints/Routers
server.use("/api/schemes", SchemeRouter);

module.exports = server;
