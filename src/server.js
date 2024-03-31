//sssserrrrrvvverrrrr.js
const express = require('express');
const app = express();


//Define middleware and routes here
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const eventsRouter = require('./routes/events');
app.use('/ap/events', eventsRouter);