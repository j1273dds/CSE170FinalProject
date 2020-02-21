var data = require("../account.json");

exports.addAcc = function(request, response) {   
	var firstName = request.query.firstName;
	var lastName = request.query.lastName;
	var email = request.query.email;
	var username = request.query.username;
	var newPost = { "firstName":firstName , "lastName":lastName, "email":email,"username":username};
	data.account.push(newPost);
	response.render('account',data);
}
