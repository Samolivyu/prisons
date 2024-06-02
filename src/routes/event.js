const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

//Get all events

router.get('/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/events', async (req, res) => {
    try{
        const{ date, eventType } = req.body;
        const event = await event.save();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Delete an event 
router.delete('/events/:id', async (req, res) => {
    try{
       const { id } = req.params;
       await Event.findByIdAndDelete(id);
       res.join({ message: 'Event deleted' });
    } catch(error){
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;