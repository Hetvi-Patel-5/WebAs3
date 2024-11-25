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

/*Delete Operation --> Get route to perform lead opertion*/
const Workout = require('../models/tracker.js'); 
router.get('/delete/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        Workout.deleteOne({_id:id}).then(()=>{
            res.redirect('/track')
        })
        
    }
    catch(err){
        console.error(err)
        res.render('error',{
            error:'Error on Server'})
    }
    });
    

/* GET Edit Workout page. */
router.get('/edit/:id', async (req, res, next) => {
    try {
        const workout = await Tracker.findById(req.params.id); // Find the workout by ID
        if (!workout) {
            return res.status(404).send('Workout not found');
        }
        res.render('edit', {
            title: 'Edit Workout',
            workout: workout // Send the workout data to the view
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
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
