const express = require("express");
const fs = require("fs");
const https = require("https");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../build')));
  
  app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../build/index.html')));
}

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});

module.exports = app;
