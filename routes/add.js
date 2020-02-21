var data = require("../data.json");
var datafound = require("../data-found.json");
var mylost = require("../mylost.json");
var myfound = require("../myfound.json");


exports.addPost = function(request, response) {   
	var name = request.query.name;
	var description = request.query.description;
   var loc = request.query.lastseen;
	var image = request.query.image;
	var lost_found = request.query.lost_found;
	var newPost = { "name":name, "description":description, "lastseen":loc, "image":image};

	if (lost_found == "lost"){
      mylost.lostposts.push(newPost);
  		data.posts.unshift(newPost);
		response.render('lost',data);
	} else {
      myfound.foundposts.push(newPost);
		datafound.posts.unshift(newPost);
		response.render('lost',datafound);
	}
	
}
