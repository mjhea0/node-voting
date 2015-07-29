var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vote = new Schema({
  votes: {},
});

module.exports = mongoose.model('votes', Vote);
