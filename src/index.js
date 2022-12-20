const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

// this have router object
const ApiRoutes = require("./routes/index");

const db = require("./models/index");
// const { City, Airport } = require("./models/index");

const setupAndStartServer = async () => {
  // create the express object ->
  const app = express();

  // body parser middlewares ->
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // any incoming request we will map with ApiRoutes
  app.use("/api", ApiRoutes);

  // start the app server ->
  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);

    //synchronization -> use CAREFULLY !!
    if (process.env.SYNC_DB) {
      // you need to do this one time. not everytime
      db.sequelize.sync({ alter: true });
    }

  });
};

setupAndStartServer();
