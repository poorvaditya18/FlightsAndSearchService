
We are doing role based development. - src/
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
- npx sequelize db:create

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
