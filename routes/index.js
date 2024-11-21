var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Workout Tracker Home'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Workout Tracker Home'
  });
});

/* GET Workouts page. */
router.get('/workouts', function(req, res, next) {
  res.render('workouts', { 
    title: 'My Workouts'
  });
});

/* GET Add Workout page. */
router.get('/add-workout', function(req, res, next) {
  res.render('add-workout', { 
    title: 'Add a New Workout'
  });
});

/* GET About page. */
router.get('/about', function (req, res, next) {
  res.render('about', { 
    title: 'About This Tracker'
  });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Us'
  });
});


module.exports = router;
