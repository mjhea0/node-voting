var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var swig = require('swig');
var Vote = require('./models/vote');

var routes = require('./routes/index');

var app = express();

// view engine setup
swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


// mongo
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/g11-votes");

// seed database
Vote.find({}, function(err, documents) {

  if(documents.length === 0){

    var countArray = [
      { name: 'charlie', count: 0 },
      { name: 'ben', count: 0 },
      { name: 'robbie', count: 0 }
    ];

    for (var i = 0; i < countArray.length; i++) {
       var data = new Vote(
        {
          name: countArray[i].name,
          count: countArray[i].count,
        }
      );
      data.save();
    }
    console.log('Database Seeded!');
  }

});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
