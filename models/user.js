var mongoose = require('mongoose');

var userScheme = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 64, unique: true },
    displayName: { type: String, maxlength: 128 },
    allowReports: { type: Boolean },
    allowSetup: { type: Boolean }
});

module.exports = mongoose.model('User', userScheme);