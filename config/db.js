//module.exports = {
//    "URI" : "mongodb://localhost/trackerdb"
//}

  
const mongoose = require('mongoose');

// Your MongoDB connection URI
const dbURI = 'mongodb+srv://hetvipatel9:dlFr01IhM5c92jgo@cluster0.a6mom.mongodb.net/';

// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
