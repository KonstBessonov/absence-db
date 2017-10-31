const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/absence_db', {
    useMongoClient: true,
    promiseLibrary: require('bluebird')
});

mongoose.connection.on('error', err => {
    console.log('MongoDB connection error: ' + err);
    process.exit(2);
});

mongoose.connection.on('connected', () => {
    console.log('Successfull connection to MongoDB');
});

require('../models');