// momgoose config
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    date: Date,
    eventType: String,
});

module.exports = mongoose.model('Event', eventSchema);
