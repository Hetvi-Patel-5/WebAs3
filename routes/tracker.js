let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect with tracker model
require('../models/tracker');
let Tracker = mongoose.model('Tracker');

// Read Operation
// Get route for the tracker list
router.get('/', (req, res, next) => {
    Tracker.find((err, trackerList) => {
        if (err) {
            return console.error(err);
        } else {
            console.log(trackerList);
            res.json(trackerList); // send the tracker list as JSON
        }
    });
});

module.exports = router;
