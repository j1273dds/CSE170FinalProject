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
	var contact = request.query.contact;
	var date = new Date();

	if (lost_found == "lost") {
      var id = data.posts.slice(-1)[0]['id'] + 1;
      var newPost = { "id":id, "name":name, "description":description, "lastseen":loc, "image":image,"date":date,"contact":contact};
      mylost.lostposts.push(newPost);
  		data.posts.unshift(newPost);
		response.render('lost', data);
	} else {
      var id = data.posts.slice(-1)[0]['id'] + 1;
      var newPost = { "id":id, "name":name, "description":description, "lastseen":loc, "image":image,"date":date,"contact":contact};
      myfound.foundposts.push(newPost);
		datafound.posts.unshift(newPost);
		response.render('lost', datafound);
	}
	
}
