const db = require('../models/models');

module.exports = {
  signUp: async (req, res, next) => {
    const { username, password, firstName, lastName } = req.body;
    const sqlQuery = 'INSERT INTO users (username, password, firstName, lastName) VALUES ($1, $2, $3, $4) RETURNING *;'
    const params = [username, password, firstName, lastName];

    try {
      const response = await db.query(sqlQuery, params);
      console.log(response);
      return next();
    }
    catch (error) {
      return next({
        log: 'Error in authController.signUp',
        status: 500,
        message: { err: `An error occurred in authController.signUp ${error}` },
      });
    }
  },

  logIn: async (req, res, next) => {
    const { username, password} = req.body;
    const sqlQuery = 'SELECT * FROM users WHERE (username, password) = ($1, $2);'
    const params = [username, password];

    try {
      const response = await db.query(sqlQuery, params);
      console.log(response);
      return next();
    } catch (error) {
      return next({
        log: 'Error in authController.logIn',
        status: 500,
        message: { err: `An error occurred in authController.logIn ${error}` },
      });
    }
  }
}