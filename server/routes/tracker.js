var express = require('express');
var router = express.Router();
let Tracker = require('../models/tracker.js');

/* GET Track Workouts page (List all workouts). */
router.get('/', async (req, res, next) => {
    try {
        const workouts = await Tracker.find(); // Fetch all workouts from the database
        res.render('track', {
            title: 'Track Workouts',
            workoutsList: workouts, 
        });
    } catch (err) {
        console.error(err);
        res.render('error', {
            error: 'Failed to load workouts',
        });
    }
});


/* GET Add New Workout page. */
router.get('/add', function (req, res, next) {
    res.render('add', {
        title: 'Add a New Workout',
    });
});

/* POST Add New Workout. */
router.post('/add', async (req, res, next) => {
    try {
        const { Date, Description, Minutes, Calories, Notes } = req.body;
        const newWorkout = new Tracker({
            Date,
            Description,
            Minutes,
            Calories,
            Notes,
        });
        await newWorkout.save(); // Save the workout to the database
        res.redirect('/track'); // Redirect back to the Track Workouts page
    } catch (err) {
        console.error(err);
        res.render('error', {
            error: 'Failed to add workout',
        });
    }
});

/* POST Delete Workout. */
router.post('/delete/:id', async (req, res, next) => {
    try {
        await Tracker.findByIdAndDelete(req.params.id); // Delete the workout by ID
        res.redirect('/track'); // Redirect back to the Track Workouts page
    } catch (err) {
        console.error(err);
        res.render('error', {
            error: 'Failed to delete workout',
        });
    }
});

/* GET Edit Workout page. */
router.get('/edit/:id', async (req, res, next) => {
    try {
        const workout = await Tracker.findById(req.params.id); // Find the workout by ID
        res.render('edit', {
            title: 'Edit Workout',
            workout,
        });
    } catch (err) {
        console.error(err);
        res.render('error', {
            error: 'Failed to load workout for editing',
        });
    }
});

/* POST Edit Workout. */
router.post('/edit/:id', async (req, res, next) => {
    try {
        const { Date, Description, Minutes, Calories, Notes } = req.body;
        await Tracker.findByIdAndUpdate(req.params.id, {
            Date,
            Description,
            Minutes,
            Calories,
            Notes,
        });
        res.redirect('/track'); // Redirect back to the Track Workouts page
    } catch (err) {
        console.error(err);
        res.render('error', {
            error: 'Failed to update workout',
        });
    }
});

module.exports = router;
