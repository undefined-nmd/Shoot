const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  message: { type: String, required: true, max: 1000 },
});


// Export the model
module.exports = mongoose.model('Request', RequestSchema);
