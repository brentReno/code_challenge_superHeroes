var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var superSchema = new Schema({
  alias: String,
  first_name: String,
  last_name: String,
  city: String,
  power_name: {type: String, enum: ['invisibility', 'flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity']}
});

var Heroes = mongoose.model('Heroes', superSchema);

module.exports = Heroes;
