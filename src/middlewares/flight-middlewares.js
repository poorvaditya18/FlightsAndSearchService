// Here we are going to setup all the middlewares that are going to setup the flight
// middlewares are simple functions that have access to the request , response , next
// example -> we can put the user authentication in middlewares
const { ClientErrorsCodes } = require("../utils/error-codes");

const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    // if any of the body param is missing you come inside the if
    // 400 -> is the bad request : you are not following the api contract

    return res.status(ClientErrorsCodes.BAD_REQUEST).json({
      data: {},
      success: true,
      message: "Invalid Request Body for create Flight",
      err: "Missing mandatory properties to create a flight",
    });
  }

  // if every details is present the call the next middleware
  next();
};

module.exports = {
  validateCreateFlight,
};
