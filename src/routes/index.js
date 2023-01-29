const express = require("express");
const router = express.Router();

// whenever you get "/v1" then map to the v1ApiRoutes
const v1ApiRoutes = require("./v1/index");
router.use("/v1", v1ApiRoutes);

//  For version 2 --->
// const v2ApiRoutes = require("./v2/index");
// router.use("/v2",v2ApiRoutes);
module.exports = router;
