const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  // create the express object ->
  const app = express();

  // body parser middlewares ->
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // start the app server ->
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStartServer();
