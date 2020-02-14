var data = require("../data.json");
var datafound = require("../data-found.json");

exports.addPost = function(request, response) {    
	var name = request.query.name;
	var description = request.query.description;
	var image = request.query.image;
	var newPost = { "name":name , "description":description, "image":image};
	
   data.posts.push(newPost);
	response.render('lost',data);
 }
