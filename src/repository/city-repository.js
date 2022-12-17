// Repository will help us to interact with the models(databases)

// Reponsible for communicating with datasource it can either be from database or any other source

// we dont want tight coupling therefore we make this layer .

const { City } = require("../models/index");

class CityRepository {
  //    create city
  async createCity({ name }) {
    // {name: "New Delhi"}
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  //   delete city
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  // update city
  async updateCity(cityId, data) {
    try {
      // * The below approach also works but will not return updated object
      // if you are using Pg then returning:true can be used,else not 
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });

      // * for getting updated data in mysql we use this ->
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {}
  }

  //   get city
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  //get all the cities
  async getAllCities(){
    try {
      
      const cities = await City.findAll();
      return cities;

    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
