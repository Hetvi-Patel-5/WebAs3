var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is a users page for the Workout Tracker!');
});

module.exports = router;
