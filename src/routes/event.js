const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

//Get all events

router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const event = new Event({
        date: req.body.date,
        type: req.body.type
    });

    try{
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Delete an event 
router.delete('/:id', async (req, res) => {
    try{
       await Event.findByIdAndDelete(req.params.id);
       res.join({ message: 'Event deleted' });
    } catch(error){
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;