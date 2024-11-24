let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect with tracker model
let Tracker = require('../models/tracker');

// Read Operation
// Get route for the tracker list

/* router.get('/add-workout', (req, res, next) => {
    res.render('add-workout', {
        title: 'Add Workout',
    });
}); */

router.get('/add-workout', (req, res) => {
    Tracker.find((err, trackerList) => {
        if (err) {
            console.log(err);
            return res.redirect('/add-workout');  // Optionally handle error
        }
        res.render('add-workout', {
            title: 'Add Workout',
            TrackerList: trackerList
        });
    });
});


module.exports = router;
