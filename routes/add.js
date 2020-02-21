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

	if (lost_found == "lost") {
      var id = data.posts.slice(-1)[0]['id'] + 1;
      var newPost = { "id":id, "name":name, "description":description, "lastseen":loc, "image":image};
      mylost.lostposts.push(newPost);
  		data.posts.unshift(newPost);
		response.render('lost', data);
	} else {
      var id = data.posts.slice(-1)[0]['id'] + 1;
      var newPost = { "id":id, "name":name, "description":description, "lastseen":loc, "image":image};
      myfound.foundposts.push(newPost);
		datafound.posts.unshift(newPost);
		response.render('lost', datafound);
	}
	
}
