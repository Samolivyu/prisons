//sssserrrrrvvverrrrr.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


//Define middleware and routes here
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/prison', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true });


const eventSchema = new mongoose.Schema({
    id: Number,
    date: Date,
})

const Event = mongoose.model('Event', eventSchema);


//Get all events
app.get('/api/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get an event by id
app.get('/api/events/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const event = await Event.findById(id);
        if(!event) return res.status(404).send('Event not found');
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Create an event
app.post('/api/events', async (req, res) => {
    try{
        const { date } = req.body;
        const event = await Event.create({ date });
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Delete an event
app.delete('/api/events/:id', async (req, res) => {
    try{
       const { id } = req.params;
       const event = await Event.findById(id);
       await Event.findByIdAndDelete(id);
       if(!event) return res.status(404).send('Event not found');
       res.json({ message: 'Event deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const eventsRouter = require('./routes/events');
app.use('/api/events', eventsRouter);

// 2likELY6SuPZyJdY