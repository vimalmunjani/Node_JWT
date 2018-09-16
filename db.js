const mongoose = require('mongoose');

const config = require('./config');
console.log(config.database);
mongoose.connect(config.database,{ useNewUrlParser: true })
        .then(() => console.log(`connected to db`))
        .catch((err) => console.log(`error connecting to db - ${err.message}`));
    