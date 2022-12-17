const express = require("express");
const router = express.Router();

const v1ApiRoutes = require("./v1/index");

// whenever you get "/v1" then map to the v1ApiRoutes
router.use("/v1", v1ApiRoutes);

//  For version 2 --->
// router.use("/v2",v2ApiRoutes);
module.exports = router;
