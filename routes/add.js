var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;
	var image = request.query.image;
	var newFriend = { "name":name , "description":description, "image":image};
	data.friends.push(newFriend);
	response.render('lost',data);
 }