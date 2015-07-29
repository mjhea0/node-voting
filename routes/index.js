var express = require('express');
var router = express.Router();
var Vote = require('../models/vote');

router.get('/', function(req, res, next) {
  Vote.find({}, function(err, data) {
    console.log(data)
    res.render('index', {data: data});
  });
});

router.post('/votes', function(req, res) {
  console.log(req.body['name'])
  Vote.findOneAndUpdate({'name':req.body['name']}, {'count':req.body['count']}, function(err, results) {
    if (err) {
      return next(err);
    } else {
      res.send(results);
    }
  });
});


module.exports = router;
