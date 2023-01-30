const express = require("express");

const { FlightMiddlewares } = require("../../middlewares/index");

const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");

const AirportController = require("../../controllers/airport-controller");

const router = express.Router();

// so whenever someone calls "/v1/city" -> it will call to the CityController.create
//create a city
router.post("/city", CityController.create);
//delete a city
router.delete("/city/:id", CityController.destroy);
// get a city
router.get("/city/:id", CityController.get);
//get all cities
router.get("/city", CityController.getAll);
//update a city
router.patch("/city/:id", CityController.update);

// create flight
router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  FlightController.create
);

//delete a flight
router.delete("/flights/:id", FlightController.destroy);

//update a flight - TODO
router.patch("/flights/:id", FlightController.update);

//get all flights
router.get("/flights", FlightController.getAll);
//get a particular flight
router.get("/flights/:id", FlightController.get);

// create airport
router.post("/airports", AirportController.create);
//getAll
router.get("/airports", AirportController.getAll);
//get a particular airport
router.get("/airports/:id", AirportController.get);
//delete airport
router.delete("/airports/:id", AirportController.destroy);
//update a airport
router.patch("/airports/:id", AirportController.update);

module.exports = router;
