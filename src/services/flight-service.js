const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
// we need to fetch the data from airplaneRepository as we want totalseats

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be less than departure time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      
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

  async getFlightData() {
    // todo
  }
}

// How controller will send data -> ?
/*
 * {
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    arrivalTime,
    departureTime,
    price,
    totalSeats -> we need to fetch from airplane
}
 * 
 */

module.exports = FlightService;
