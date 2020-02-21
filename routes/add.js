var data = require("../data.json");
var datafound = require("../data-found.json");

exports.addPost = function(request, response) {    
	var name = request.query.name;
	var description = request.query.description;
	var image = request.query.image;
	var lost_found = request.query.lost_found;
	var newPost = { "name":name , "description":description, "image":image};

	if (lost_found == "lost"){
  		data.posts.push(newPost);
		response.render('lost',data);
	} else {
		console.log(lost_found);
		datafound.posts.push(newPost);
		response.render('lost',datafound);
	}
	
 }
