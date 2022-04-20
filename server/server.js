const express = require("express");
const fs = require("fs");
const https = require("https");
const path = require("path");

const router = require('./router')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../build')));
  
  app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../build/index.html')));
}

app.use('/users', router)

app.use('*', (req, res) => res.status(404).send('Page not Found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});

module.exports = app;