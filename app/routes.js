var User = require('./models/user');

function getUsers(res){
	User.find(function(err, Users) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(Users); // return all Users in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all Users
	app.get('/api/users', function(req, res) {

		// use mongoose to get all Users in the database
		getUsers(res);
	});

	// create User and send back all Users after creation
	app.post('/api/users', function(req, res) {

		// create a User, information comes from AJAX request from Angular
		User.create({
			name : req.body.name,
			email : req.body.email,
			location : req.body.location,
			reason : req.body.reason,
			message: req.body.message,
			done : false
		}, function(err, User) {
			if (err)
				res.send(err);

			// get and return all the Users after you create another
			getUsers(res);
		});

	});


	// delete a User
	app.delete('/api/users/:user_id', function(req, res) {
		User.remove({
			_id : req.params.user_id
		}, function(err, user) {
			if (err)
				res.send(err);

			getUsers(res);
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};