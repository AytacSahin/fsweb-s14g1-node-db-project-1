const express = require("express");
const accountRouter = require("./accounts/accounts-router");

const server = express();

server.use(express.json());

server.use("/api/accounts", accountRouter);

router.use((err, req, res, next) => { // eslint-disable-line
    // KODLAR BURAYA
  })

module.exports = server;
