// momgoose config
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB connected'))
.catch(err => console.error(err));