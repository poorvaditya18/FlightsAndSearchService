const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();

// so whenever someone calls "/v1/city" -> it will call to the CityController.create
router.post("/city", CityController.create);

module.exports = router;
