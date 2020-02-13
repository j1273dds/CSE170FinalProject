var data = require("../data.json");

exports.addPost = function(request, response) {    
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;
	var image = request.query.image;
	var newFriend = { "name":name , "description":description, "image":image};
	data.posts.push(newFriend);
	response.render('lost',data);
 }
