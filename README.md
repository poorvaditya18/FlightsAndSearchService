<!-- We are doing role based development. - src/
index.js //server
models/
controllers/
middlewares/
services/
utils/
config/

    - tests/ [later]

In feature based you have separate models,controllers for each service.

Environment variables -> these are dynamic-named value that can affect the running process.
You can store these variables in the environment. Suppose PORT can change in our project as per req.Therefore, we can setup it as env variable.

- In your project create a new file as .env
- Inside that file you can write any variable.
- Now You need to require the package.

* we you require , try to require things of similar types.

* sequelize -> is the ORM for server.
* mysql2 -> is required to connect to sequelize.
* you need to configure the sequelize orm -> you can use sequelize-cli.

- npx sequelize init
- npx sequelize db:create -->

# Welcome to Flights Service

## Project Setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- create a `.env` file in the root directory and add the following environment variable
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "<YOUR_DB_USERNAME>",
    "password": "<YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```

```
- Once you've added your db config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

  `npx sequelize db:migrate`

```

## DB Design :

- we have multiple airplanes and same airplane can be used for multiple flights

- Airplane Table : data about airplanes
- Flight Table : data about flights
- Airport Table : data about airport

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airports belongs to a city
- One airport can have many flights, but a flight belongs to one airport.

## Airplane table

- id -> this will be used to uniquely identify the city
- model_number-> can be same for multiple airplane
- capacity
- created_at
- updated_at

1:N
one airplane can be used in many flights.
where as one flight can only be associated to one airplane

## Flights Table

- id - unique id to identify the flight
- departure_city_id
- destination\_ city_id
- airplane_id
- departure
- arrival
- flight number

1:N
From one airport many flights can be flied but one flight can fly from one airport in particular city.

## city

- id
- name

1:N
In one city there can be multiple airports but one airport can belong to one city

## airport

- id
- name
- city_id
- address

NOTE : Sequelize cli bydefault creates 'id'.

- Idea : We can segregate the logic of controllers , routes, middlewares in their respective place. Why ??
  Reason : To write clean code and enhance the usability.

<!--

Express ROUTER : used to write clean code .

/birds
/birds/about
/birds/help

const birds = require('./birds');
app.use('/birds',birds);
        .
        .
        .
* we can make some prefixes
router.get('/',)
 -->

## Tables

### City --> id,name, created_at, updated_at

### Airport --> id,name,address,city_id,created_at,updated_at

    Relationship -> city has many airports and airport belongs to a city (one to many)

### Seeders -> helps us to put some starting value

 <!-- Method to implement joins instead of writing whole raw join query*/ 
    // const city = await City.findOne({
    //   where: {
    //     id: 2,
    //   },
    // });
    // console.log(city);
    // const airports = await city.getAirports();
    // console.log(city, airports);
    // const newairport = await Airport.findOne({
    //   where: {
    //     id: 15,
    //   },
    // });
    // await city.addAirport(newairport); -->
