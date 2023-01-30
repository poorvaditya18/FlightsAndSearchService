const { AirportService } = require("../services/index");

const airportService = new AirportService();

// create airport
const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    // console.log(response);
    return res.status(201).json({
      message: "Successfully created the airport",
      err: {},
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot Create A New Airport",
    });
  }
};

//get
const get = async (req, res) => {
  try {
    const response = await airportService.get(req.params.id);
    return res.status(201).json({
      message: "Successfully fetched the airport",
      err: {},
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Not able to a fetch Airport",
    });
  }
};

// getAll
const getAll = async (req, res) => {
  try {
    const response = await airportService.getAll();
    return res.status(201).json({
      message: "Successfully fetched the airports",
      err: {},
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Not able to fetch Airports",
    });
  }
};

// delete airport
const destroy = async (req, res) => {
  try {
    const response = await airportService.destroy(req.params.id);
    return res.status(201).json({
      message: "Successfully deleted the airport",
      err: {},
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot Create A New Airport",
    });
  }
};

//update
const update = async (req, res) => {
  try {
    const response = await airportService.update(req.params.id, req.body);
    return res.status(201).json({
      message: "Successfully Updated the airport",
      err: {},
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Not able to update the airport",
    });
  }
};

module.exports = {
  create,
  destroy,
  getAll,
  get,
  update,
};
