const db = require('../models/models');
// import db from '../models/models';

module.exports = {
  signUp: async (req, res, next) => {
    const { username, password, firstName, lastName } = req.body;
    const sqlQuery =
      'INSERT INTO users (username, password, firstName, lastName) VALUES ($1, $2, $3, $4) RETURNING *;';
    // const sqlQuery = `INSERT INTO users (username, password, firstName, lastName) SELECT ${username}, ${password}, ${firstName}, ${lastName} WHERE NOT EXISTS (SELECT username FROM users WHERE username = ${username}) RETURNING *;`
    const params = [username, password, firstName, lastName];

    try {
      const response = await db.query(sqlQuery, params);
      // const response = await db.query(sqlQuery);
      console.log(response.rows[0]);
      return next();
    } catch (error) {
      return next({
        log: 'Error in authController.signUp',
        status: 500,
        message: { err: `An error occurred in authController.signUp ${error}` }
      });
    }
  },

  logIn: async (req, res, next) => {
    const { username, password } = req.body;
    const sqlQuery =
      'SELECT * FROM users WHERE (username, password) = ($1, $2);';
    const params = [username, password];

    try {
      const response = await db.query(sqlQuery, params);
      const userId = response.rows[0].id;
      const getLocationQuery = `SELECT * FROM countries WHERE (userId) = ${userId};`;
      const getLocationResponse = await db.query(getLocationQuery);
      res.locals.allLocations = getLocationResponse.rows;
      return next();
    } catch (error) {
      return next({
        log: 'Error in authController.logIn',
        status: 500,
        message: { err: `An error occurred in authController.logIn ${error}` }
      });
    }
  },

  addLocation: async (req, res, next) => {
    let visitedCountries;
    let destinationCountries;
    if (req.body.visitedCountries === true) {
      visitedCountries = true;
      destinationCountries = false;
    } else {
      destinationCountries = true;
      visitedCountries = false;
    }
    const { username, location, lat, long, userId } = req.body;
    const sqlQuery =
      'INSERT INTO countries (location, lat, long, visitedCountries, destinationCountries, userId) VALUES ($1, $2, $3, $4, $5, $6);';
    const params = [
      location,
      lat,
      long,
      visitedCountries,
      destinationCountries,
      userId
    ];

    try {
      const response = await db.query(sqlQuery, params);
      const getLocationQuery = `SELECT * FROM countries WHERE (userId) = ${userId};`;
      const getLocationResponse = await db.query(getLocationQuery);
      const allLocations = getLocationResponse.rows;
      const obj = {
        placesVisitedArray: [],
        placesWantToVisitArray: []
      };
      for (let i = 0; i < allLocations.length; i++) {
        if (allLocations[i].visitedcountries === true)
          obj.placesVisitedArray.push(allLocations[i]);
        else obj.placesWantToVisitArray.push(allLocations[i]);
      }
      res.locals.allLocations = obj;
      console.log(res.locals.allLocations);
      return next();
    } catch (error) {
      return next({
        log: 'Error in authController.signUp',
        status: 500,
        message: { err: `An error occurred in authController.signUp ${error}` }
      });
    }
  }
};
