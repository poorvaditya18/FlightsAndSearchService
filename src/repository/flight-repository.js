const { Flights } = require("../models/index");

const { Op } = require("sequelize");

class FlightRepository {
  //private member function
  #createFilter(data) {
    let filter = {};

    // based on arrival airport
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    // based on departure airport
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    // if(data.minPrice && data.maxPrice) {
    //     Object.assign(filter, {
    //         [Op.and]: [
    //             { price: {[Op.lte]: data.maxPrice} },
    //             { price: {[Op.gte]: data.minPrice} }
    //         ]
    //     })
    // }
    let priceFilter = [];

    // based on minimum price
    if (data.minPrice) {
      // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }

    //based on maximum price
    if (data.maxPrice) {
      // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    // filter -> btw minimum and maximum
    Object.assign(filter, { [Op.and]: priceFilter });
    // Object.assign(filter, {[Op.and]: [{ price: {[Op.lte]: 7000} }, { price: {[Op.gte]: 4000} }]})
    // console.log(filter);
    return filter;
  }

  //create flight
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
  

  // delete a flight 
  async deleteFlight(flightId) {
    try {
      await Flights.destroy({
        where: {
          id: flightId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }





  //get particular flight data
  // suppose you are building bording pass then in that case you will require particular flight data
  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  // get all flights
  async getAllFlights(filter) {
    try {
        const filterObject = this.#createFilter(filter);
        const flight = await Flights.findAll({
            where: filterObject
        });
        return flight;
    } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw {error};
    }
}
}

module.exports = FlightRepository;
