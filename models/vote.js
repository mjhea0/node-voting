var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vote = new Schema({
  votes: {type: String},
});

module.exports = mongoose.model('votes', Vote);
