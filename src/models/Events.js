// Defining the mongoose schema to model the data structure of the calendar events
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    date: { type: Date, required: true},
    type: { type: String, enum:['urgent', 'miscellaenous', 'release'], required: true}
});

module.exports = mongoose.model('Event', eventSchema);