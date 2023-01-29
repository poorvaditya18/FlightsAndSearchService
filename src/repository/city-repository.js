// Repository will help us to interact with the models(databases)

// Reponsible for communicating with datasource it can either be from database or any other source

// we dont want tight coupling therefore we make this layer .
const { Op } = require("sequelize");
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

  // update city - will take cityID( which city we want to update), data(parameter which we want to update)
  async updateCity(cityId, data) {
    try {
      // * The below approach also works but will not return updated object
      // if you are using PgSQl then returning:true can be used,else not
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
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };

    }
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
  async getAllCities(filter) {
    // filter can be empty also  . we will pass it as the query param
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
     // if city does not have the name then fetch all the cities ->
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
