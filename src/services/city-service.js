const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    // creating city repository object
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in Service Layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const res = await this.CityRepository.deleteCity(cityId);
      return res;
    } catch (error) {
      console.log("Something went wrong in Service Layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong in Service Layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.CityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in Service Layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      // {name:filter.name} -> initially making check for query params 
      // as user can send you more params so here we only required 'name' 
      const cities = await this.CityRepository.getAllCities({name:filter.name});
      return cities;
    } catch (error) {
      console.log("Something went wrong in Service Layer");
      throw { error };
    }
  }
}

module.exports = CityService;
