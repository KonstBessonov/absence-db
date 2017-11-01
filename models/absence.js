var mongoose = require('mongoose');

var absenceScheme = new mongoose.Schema({
    user: { type: String, required: true, maxlength: 64}, // _id of user
    outDate: {type: Date},
    backDate: {type: Date},
    description: { type: String, maxlength: 128 }
});

module.exports = mongoose.model('Absence', absenceScheme);