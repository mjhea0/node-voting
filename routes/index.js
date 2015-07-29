var express = require('express');
var router = express.Router();
var Vote = require('../models/vote');

router.get('/', function(req, res, next) {
  Vote.findOne({}, function(err, data) {
    console.log(data)
    res.render('index', data);
  });
});

// router.get('/votes', function(req, res, next) {
//   Vote.find({}, function(err, data) {
//     if (err) {
//       return next(err);
//     } else {
//       return res.send(data);
//     }
//   });
// });

router.post('/votes', function(req, res) {
  console.log(req.body)
  Vote.findOneAndUpdate({}, req.body, function(err, results) {
    console.log(results)
    if (err) {
      return next(err);
    } else {
      res.send(results);
    }
  });
});


module.exports = router;
