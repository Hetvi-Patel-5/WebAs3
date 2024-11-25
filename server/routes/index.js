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

// Route for Add Workout Page (GET request)
router.get('/add', async (req, res, next) => {
  try {
      // Fetch existing workouts from the database
      const workoutsList = await Tracker.find();
      
      // Render the add workout page with the list of workouts
      res.render('add', {
          title: 'Add Workout - Workout Tracker',
          workoutsList: workoutsList
      });
  } catch (err) {
      console.error(err);
      res.render('error', {
          error: 'Error on Server'
      });
  }
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Us'
  });
});


module.exports = router;
