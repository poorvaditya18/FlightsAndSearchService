const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    // we need to fetch the data from airplaneRepository as we want "totalseats"
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be less than departure time" };
      }
      //get airplane through airplaneId
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );

      // total seats available -> we will fetch from the airplane
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });

      return flight;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  // delete a flight ->
  async deleteFlight(flightId) {
    try {
      const res = await this.flightRepository.deleteFlight(flightId);
      return res;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  //update flight TODO
 async updateFlight(flightId,data)
 {
  try {
    const res = await this.flightRepository.updateFlight(flightId,data);
    return res;
  } catch (error) {
    console.log("Something went wrong at service layer");
      throw { error };
  }
 }


  // Get All Flights ->
  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  //Get Flight ->
  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}

// How controller will send data -> ?
/*
{
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    arrivalTime,
    departureTime,
    price,
    totalSeats -> we need to fetch from airplane
}
*/

module.exports = FlightService;
