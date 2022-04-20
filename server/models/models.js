const { Pool } = require('pg');

const pgUrl = 'postgres://unvlkyje:sJbFfEtJqhIdsHsOKwjl5rPaIvQkqpuR@rajje.db.elephantsql.com/unvlkyje';

const pool = new Pool({
  connectionString: pgUrl,
});

pool.query(`CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  username VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  firstName VARCHAR NOT NULL,
  lastName VARCHAR NOT NULL
);`);

pool.query(`CREATE TABLE IF NOT EXISTS countries (
  id serial PRIMARY KEY,
  location VARCHAR,
  lat DECIMAL,
  long DECIMAL,
  visitedCountries boolean,
  destinationCountries boolean,
  userId INTEGER REFERENCES users(id)
);`);

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};