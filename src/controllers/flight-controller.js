const { FlightService } = require("../services/index");

const { SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    // filtering out request object ... good practise
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: error,
    });
  }
};

// delete a flight
const destroy = async (req, res) => {
  try {
    const response = await flightService.deleteFlight(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully Deleted a Flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a Flight",
      err: error,
    });
  }
};

//TODO
const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully Updated a Flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the Flight",
      err: error,
    });
  }
};

// Get All flight ->
const getAll = async (req, res) => {
  try {
    // console.log(req.query);
    const response = await flightService.getAllFlightData(req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flights",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flights",
      err: error,
    });
  }
};

// Get Flight ->
const get = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  destroy,
  update,
};
