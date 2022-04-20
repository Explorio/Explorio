const express = require('express')

const authController = require('./controllers/authController');

const router = express.Router();

router.post('/signup', authController.signUp, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post('/login', authController.logIn, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post('/addLocation', authController.addLocation, (req, res) => {
  res.status(200).json(res.locals.allLocations);
})


module.exports = router;