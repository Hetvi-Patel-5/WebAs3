let mongoose = require('mongoose');


// Define the schema for the tracekr
let trackerSchema = mongoose.Schema({
    Date: String,
    Description: String,
    Minutes: Number,
    Calories: Number,
    Notes: String
}, 
{ 
    collection: "tracker" 
});

module.exports = mongoose.model('Tracker', trackerSchema);
