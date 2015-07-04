var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var phoneValidater = validate({
    validator: 'matches',
    arguments: /^\(?[0-9]{3}(\-|\)) ?[0-9]{3}-[0-9]{4}$/,
    message: 'Must be a valid, U.S. Phone number'
});

module.exports = mongoose.model('User', {
    name: {
        type: String,
        default: ''
    },
    email: String,
    location: String,
    reason: String,
    phoneNumber: {
        type: String,
        validate: phoneValidater
    },
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});