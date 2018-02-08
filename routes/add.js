var data = require("../data.json");

exports.addFriend = function(req, res) {  
	res.render('index', data);
	var newFriend = { "name": req.query.name,
    "description": req.query.description, 
    "imageURL": "http://lorempixel.com/400/400/people" };
	data.friends.push(newFriend);
	console.log(data.friends);
}

