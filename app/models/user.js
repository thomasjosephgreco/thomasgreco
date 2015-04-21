var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	name : {type : String, default: ''}, 
	email: String,
	location: String,
	reason: String,
	message: String,
	createdAt: {type: Date, default: Date.now},
});