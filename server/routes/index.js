var express = require('express');
var router = express.Router();
let Tracker = require('../models/tracker.js')

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('home', { 
    title: 'Workout Tracker Home'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { 
    title: 'Workout Tracker Home'
  });
});

/* GET About page. */
router.get('/about', function (req, res, next) {
  res.render('about', { 
    title: 'About This Tracker'
  });
});

/* GET Workouts page. */
router.get('/workouts', function(req, res, next) {
  res.render('workouts', { 
    title: 'My Workouts'
  });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Us'
  });
});


module.exports = router;
