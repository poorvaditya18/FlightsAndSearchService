// Repository will help us to interact with the models(databases)
const { City } = require("../models/index");

class CityRepository {
  // create city
  async createCity({ name }) {
    try {
      // .create() -> is available in sequelize
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  // delete city
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository