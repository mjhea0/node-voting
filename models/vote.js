var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vote = new Schema({
  name: String,
  count: Number
});

module.exports = mongoose.model('votes', Vote);
