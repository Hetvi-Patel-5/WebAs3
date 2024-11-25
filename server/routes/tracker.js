var express = require('express');
var router = express.Router();
let Tracker = require('../models/tracker.js')  
let trackerController = require('../controllers/tracker.js')  

/* Read Operation --> Get route for displaying the workout list */
router.get('/', async (req, res, next) => {
    try {
        const TrackerList = await Tracker.find();
        res.render('tracker/list', {
            title: 'Workouts',
            TrackerList: TrackerList
        });
    } catch (err) {
        console.error(err);
        res.render('tracker/list', {
            error: 'Error on Server'
        });
    }
});

/* Create Operation --> Get route for displaying add page */
router.get('/add', async (req, res, next) => {
    try {
        res.render('tracker/add', {
            title: 'Add Workout'
        });
    } catch (err) {
        console.error(err);
        res.render('tracker/list', {
            error: 'Error on Server'
        });
    }
});

/* Create Operation --> Post route for processing the Add Page */
router.post('/add', async (req, res, next) => {
    try {
        let newWorkout = Tracker({
            "date": req.body.Date,
            "description": req.body.Description,
            "minutes": req.body.Minutes,
            "calories": req.body.Calories,
            "notes": req.body.Notes
        });

        Tracker.create(newWorkout).then(()=>{
            res.redirect('/tracker'); /* Once created, route back to workouts */
        })
    } catch (err) {
        console.error(err);
        res.render('tracker/list', {
            error: 'Error on Server'
        });
    }
});

/* Update Operation --> Get route for displaying edit page */
router.get('/edit/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const workoutToEdit = await Tracker.findById(id);
        res.render('tracker/edit', {
            title: 'Edit Workout',
            Tracker: workoutToEdit
        });
    } catch (err) {
        console.error(err);
        next(err); // Keep passing the error
        res.render('tracker/list', {
            error: 'Error on Server'
        });
    }
});

/* Update Operation --> Post route for processing the edit Page */
router.post('/edit/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let updatedWorkout = Tracker({
            "_id": id,
            "date": req.body.Date,
            "description": req.body.Description,
            "minutes": req.body.Minutes,
            "calories": req.body.Calories,
            "notes": req.body.Notes
        });

        Tracker.findByIdAndUpdate(id, updatedWorkout).then(()=>{
            res.redirect('/tracker');
        })
    } catch (err) {
        console.error(err);
        res.render('tracker/list', {
            error: 'Error on Server'
        });
    }
});

/* Delete Operation --> Get route to perform delete operation */
router.get('/delete/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        Tracker.deleteOne({ _id: id }).then(()=>{
            res.redirect('/tracker');
        })
    } catch (err) {
        console.error(err);
        res.render('tracker/list', {
            error: 'Error on Server'
        });
    }
});

module.exports = router;